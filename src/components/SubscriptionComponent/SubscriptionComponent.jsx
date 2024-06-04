import { Button, Flex } from "antd";
import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../Services/LoginService";
import OrderService from "../../Services/OrderService";

export default function SubscriptionComponent() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const loginSession = localStorage.getItem("@_auth_sessions");
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canCancel, setCanCancel] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (isLoggedIn) {
        const sessionData = JSON.parse(atob(loginSession));
        getUserByEmail(sessionData.email)
          .then((response) => {
            setUserData(response.data);
          })
          .catch((error) => {
            console.error("Erro ao obter conta:", error);
          });
      }
      try {
        const responseOrder = await OrderService.getAll();
        const subscriptionOrders = responseOrder.data
          .filter(
            (item) =>
              item.status.includes("Subscrição -") &&
              (item.user_id === userData.name ||
                item.user_id === (userData._id && userData._id.$oid))
          )
          .sort((a, b) => b.created_at.$date - a.created_at.$date);

        const mostRecentOrder =
          subscriptionOrders.length > 0 ? [subscriptionOrders[0]] : [];
        setOrders(mostRecentOrder);
        if (mostRecentOrder.length > 0) {
          const createdAt = new Date(mostRecentOrder[0].created_at.$date);
          const currentDate = new Date();
          const diffInMonths =
            (currentDate.getFullYear() - createdAt.getFullYear()) * 12 +
            (currentDate.getMonth() - createdAt.getMonth());
          setCanCancel(diffInMonths >= 3);
          setStatus("Só pode cancelar a subscrição após 3 meses.");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoggedIn, loginSession, userData]);

  const handleCancel = async () => {
    if (!canCancel) {
      setStatus("Só pode cancelar a subscrição após 3 meses.");
      return;
    }
    try {
      const response = await fetch(
        "https://cafelab-service-new.onrender.com/payments/cancel-subscription",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userData.email,
            subscription_id: userData.subscription_id,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("Pagamento cancelado com sucesso");
      } else {
        setStatus("Não foi possivel cancelar a subscrição");
      }
    } catch (error) {
      setError("Um erro aconteceu ao tentar cancelar a subscrição");
    }
  };

  return (
    <Flex
      style={{
        width: "50%",
        height: "50%",
        margin: "auto",
      }}
      align="center"
      justify="center"
      vertical
      gap={20}
    >
      {userData.is_subscribed === false ? (
        <>
          <div>Não tem nenhuma subscrição ativa</div>
        </>
      ) : (
        <>
          <Flex vertical align="center" justify="center">
            {orders.length > 0 && (
              <>
                <p>{orders[0]?.status}</p>
                <p>
                  Data:{" "}
                  {new Date(orders[0]?.created_at.$date).toLocaleDateString(
                    "pt-BR",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }
                  )}
                </p>
              </>
            )}
          </Flex>
          <Button
            danger
            type="primary"
            size="large"
            onClick={handleCancel}
            disabled={!canCancel}
          >
            Cancelar Subscrição
          </Button>
          {status && <div>{status}</div>}
          {error && <div>{error}</div>}
        </>
      )}
    </Flex>
  );
}
