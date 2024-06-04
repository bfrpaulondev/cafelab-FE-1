import React, { useMemo, useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Image } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// Styled-components for custom styling
const StyledButton = styled(Button)`
  background-color: #b48d6a;
  border-color: #896c20;
  color: #e5dcd2;
  min-width: 300px;
  min-height: 45px;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #b48d6a;
    border-color: #896c20;
    color: #e5dcd2;
  }
`;

const ImageUploadProduct = ({ setImage, initialImage }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(initialImage);

  useEffect(() => {
    setImageUrl(initialImage);
  }, [initialImage]);

  const uploadProps = useMemo(
    () => ({
      name: "file",
      action: "https://coffelab-api.onrender.com/upload",
      headers: {
        authorization: "authorization-text",
      },
      maxCount: 1,
      beforeUpload: (file) => {
        const isJpgOrPng =
          file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/jpg";
        if (!isJpgOrPng) {
          message.error("Só pode por ficheiros PNG/JPEG/JPG");
        }
        return isJpgOrPng || Upload.LIST_IGNORE;
      },
      onChange(info) {
        const { status, response, name } = info.file;
        if (status === "uploading") {
          return;
        }
        if (status === "done") {
          const url = response.url;
          if (url) {
            setImage(url);
            setImageUrl(url);
            message.success(<a href={url}>{name}</a>);
          } else {
            message.error(`Upload completed but no URL received.`);
          }
        } else if (status === "error") {
          message.error(`${name} file upload failed.`);
        }
      },
    }),
    [dispatch]
  );

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Product"
          style={{ width: "100%", marginBottom: "10px" }}
        />
      )}
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>Foto de Produto</Button>
      </Upload>
    </div>
  );
};

export default ImageUploadProduct;
