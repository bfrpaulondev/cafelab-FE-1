import {
  Button,
  Flex,
  FloatButton,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import ImageUploadProduct from "../components/UplaodImageProduct/UplaodImageProduct";
import ProductsComponent from "../components/ProductsComponent/ProductsComponent";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [form] = Form.useForm();
  const [editingProduct, setEditingProduct] = useState(null);
  const [editing, setEditing] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await ProductService.getAll();
        setProducts(data.data);
      } catch (error) {
        setError("Error fetching all products");
        console.error("Error fetching all products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  const onFinish = async (values) => {
    const newValue = editing
      ? { ...values, picture: image, product_id: editingProduct._id.$oid }
      : { ...values, picture: image };
    console.log(newValue);
    if (editing) {
      try {
        const data = await ProductService.updateProduct(newValue);
        console.log(data);
        if (data.msg === "success") {
          message.success("Produto editado com sucesso");
          setIsModalOpen(false);
          setEditing(false);
          form.resetFields();
          const dataGet = await ProductService.getAll();
          setProducts(dataGet.data);
        }
      } catch (error) {
        setError("Error editing product");
        message.error("Erro ao editar produto verifique os dados");
        console.error("Error editing product:", error);
      } finally {
        setResetTrigger((prev) => !prev); // Toggle reset trigger to reset the upload component
      }
    } else {
      try {
        const data = await ProductService.createProduct(newValue);
        console.log(data);
        if (data.msg === "success") {
          message.success("Produto criado com sucesso");
          setIsModalOpen(false);
          form.resetFields();
          const dataGet = await ProductService.getAll();
          setProducts(dataGet.data);
        }
      } catch (error) {
        setError("Error creating product");
        message.error("Erro ao criar produto verifique os dados");
        console.error("Error creating product:", error);
      } finally {
        setResetTrigger((prev) => !prev); // Toggle reset trigger to reset the upload component
      }
    }
  };

  const openEditModal = (product) => {
    setEditing(true);
    setEditingProduct(product);
    setImage(product.picture);
    form.setFieldsValue({
      name: product.name,
      description: product.description,
      origin: product.origin,
      grain: product.grain,
      price: product.price,
      section: product.section,
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = async (product) => {
    console.log(product);
    try {
      const data = await ProductService.deleteProduct(product._id.$oid);
      console.log(data);
      if (data.msg === "success") {
        message.success("Produto apgado com sucesso");
        setIsModalOpen(false);
        form.resetFields();
        const dataGet = await ProductService.getAll();
        setProducts(dataGet.data);
      }
    } catch (error) {
      setError("Error deleting product");
      message.error("Erro ao apagar produto");
      console.error("Error deleting product:", error);
    }
  };

  const handleModalCancel = () => {
    setEditing(false);
    setIsModalOpen(false);
    form.resetFields();
    setEditingProduct(null);
    setImage("");
    setResetTrigger((prev) => !prev);
  };

  return (
    <>
      <Flex align="flex-start" justify="flex-start">
        <Flex gap={5} vertical>
          <FloatButton
            onClick={() => setIsModalOpen(true)}
            icon={<PlusOutlined />}
            description="Adicionar produtos"
            style={{width:"5rem", height:"5rem"}}
          />
          <FloatButton.BackTop  style={{right:140}}/>
        </Flex>
        <Flex vertical>
          <ProductsComponent
            title={"Produtos"}
            data={products}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
          />
        </Flex>
      </Flex>
      <Modal
        open={isModalOpen}
        onCancel={handleModalCancel}
        onOk={() => form.submit()}
        okText={editing ? "Editar produto" : "Criar produto"}
        cancelText="Cancelar"
      >
        <ImageUploadProduct
          setImage={setImage}
          initialImage={image}
          resetTrigger={resetTrigger}
        />
        <Form
          onFinish={onFinish}
          form={form}
          layout="vertical"
          style={{ width: "100%" }}
        >
          <Form.Item
            name="name"
            label="Nome do produto"
            rules={[
              {
                required: true,
                message: "Por favor, insira o nome do produto",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Descrição"
            rules={[
              {
                required: true,
                message: "Por favor, insira a descrição do produto",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="origin"
            label="Origem"
            rules={[{ required: false, message: "Por favor, insira a origem" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="grain"
            label="Grão"
            rules={[
              { required: false, message: "Por favor, insira o tipo de grão" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Preço"
            rules={[{ required: true, message: "Por favor, insira o preço" }]}
          >
            <InputNumber min={0} step={0.01} />
          </Form.Item>
          <Form.Item
            name="section"
            label="Seção"
            rules={[{ required: false, message: "Por favor, insira a seção" }]}
          >
            <Select>
              <Select.Option value="MENU">MENU</Select.Option>
              <Select.Option value="BOUTIQUE">BOUTIQUE</Select.Option>
              <Select.Option value="CAFE">CAFE</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
