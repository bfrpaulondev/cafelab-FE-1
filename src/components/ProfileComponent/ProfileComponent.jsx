import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Row, Col, message } from "antd";
import { useMediaQuery } from "@chakra-ui/react";
import ImageUpload from "../ImageUpload/ImageUpload";
import { getUserByEmail, updateUser } from "../../Services/LoginService";

const ProfileForm = ({ initialValues }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const [userMail, setUserMail] = useState("");
  const [fixedValues, setFixedValues] = useState({});
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const encryptedData = localStorage.getItem("@_auth_sessions");
    if (encryptedData) {
      const decryptedData = JSON.parse(atob(encryptedData));
      setUserMail(decryptedData.email);
    }
  }, []);

  useEffect(() => {
    if (userMail) {
      getUserByEmail(userMail)
        .then((data) => {
          form.setFieldsValue(data.data);
          setUserData(data.data)
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
        });
    }
  }, [userMail, form]);

  const onFinish = (values) => {
    setLoading(true);
    const completeValues = { ...values, user_id: userData._id.$oid };
    updateUser(completeValues)
      .then(() => {
        setLoading(false);
        message.success("perfil mudado com sucesso")
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ maxWidth: isMobile ? 300 : 800 }}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Row gutter={16}>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Profile Image" name="profile_image">
            <ImageUpload />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={isMobile ? 24 : 12}>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>

          <Form.Item label="Zip Code" name="zip_code">
            <Input />
          </Form.Item>

          <Form.Item label="NIF" name="nif">
            <Input />
          </Form.Item>

          <Form.Item label="Date of Birth" name="date_birth">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
