// Chakra imports
import { Flex, Grid, Center, Spinner, Box } from "@chakra-ui/react";
// assets
import BarChart from "../../../components/Charts/BarChart.jsx";
import LineChart from "../../../components/Charts/LineChart";
// Custom icons
import ActiveUsers from "./components/ActiveUsers";
import SalesOverview from "./components/SalesOverview";
import { getAllUsers } from "../../../../../Services/LoginService.tsx";
import { useEffect, useState } from "react";
import OrderService from "../../../../../Services/OrderService.jsx";
import { lineChartData, lineChartOptions } from "../../../variables/charts.jsx";

export default function Dashboard() {
  const [usersInfo, setUInfo] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lineCharts, setLCharts] = useState({
    data: lineChartData,
    options: lineChartOptions,
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getAllUsers();
        const data1 = await OrderService.getAll();
        setUInfo(data.data);
        setOrders(data1.data);
      } catch (e) {
        setError("Erro ao carregar os dados. Tente mais tarde.");
      } finally {
        setLoading(false);
        console.log(lineCharts);
      }
    };

    const getCharts = (ordersData) => {
      if (!(!ordersData || ordersData.length === 0)) {
        const today = new Date();
        const purchasesCount = new Array(12).fill(0);

        const twelveMonthsAgo = new Date(today);
        twelveMonthsAgo.setMonth(today.getMonth() - 12);

        ordersData.forEach((item) => {
          const createdAt = new Date(item.created_at.$date);
          if (createdAt >= twelveMonthsAgo && createdAt <= today) {
            const monthIndex =
              (today.getMonth() - createdAt.getMonth() + 12) % 12;
            purchasesCount[monthIndex]++;
          }
        });

        // Reverter o array para ter os meses em ordem cronológica
        purchasesCount.reverse();

        const currentMonthIndex = today.getMonth();

        const opts = lineCharts.options;

        const categories = lineCharts.options.xaxis.categories;
        // Criar um novo array ordenado começando do mês atual
        const last12Months = [];
        for (let i = 0; i < 12; i++) {
          last12Months.push(categories[(currentMonthIndex - i + 12) % 12]);
        }

        // Reverter o array para ter os meses em ordem cronológica
        last12Months.reverse();

        const newlineChartData = { name: "Vendas", data: purchasesCount };

        opts.xaxis.categories = last12Months;

        setLCharts((prev) => ({
          ...prev,
          data: [newlineChartData],
          options: opts,
        }));
      }
    };

    getUsers();

    // Executa getCharts apenas após a obtenção dos dados de pedidos
    if (orders && orders.length > 0) {
      getCharts(orders);
    }
  }, [orders]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }
  if (error) {
    return (
      <Center height="100vh">
        <Box color="red.500">{error}</Box>
      </Center>
    );
  }

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1fr 1.3fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <ActiveUsers
          title={"Utilizadores Ativos"}
          percentage={23}
          chart={<BarChart />}
          usersInfo={usersInfo}
          orders={orders}
        />
        <SalesOverview
          title={"Visão Geral das Vendas"}
          chart={<LineChart lineCharts={lineCharts} />}
        />
      </Grid>
    </Flex>
  );
}
