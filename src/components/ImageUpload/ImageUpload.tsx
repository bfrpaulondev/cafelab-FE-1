import React, { useMemo } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setProfileImage } from '../../redux/Slicers/userSlice';

// Styled-components for custom styling
const StyledButton = styled(Button)`
  background-color: #4A5568;
  border-color: #2D3748;
  color: white;
  min-width: 300px;
  min-height: 45px;
  width: 100%;
  
  &:hover, &:focus {
    background-color: #2D3748;
    border-color: #896c20;
    color: #2D3748;
  }
`;

const ImageUpload = () => {
  const dispatch = useDispatch();

  const uploadProps = useMemo(() => ({
    name: 'file',
    action: 'https://cafelab-service-new.onrender.com/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      const { status, response, name } = info.file;
      if (status === 'uploading') {
        return;
      }
      if (status === 'done') {
        const url = response.url;
        if (url) {
          dispatch(setProfileImage(url));
          message.success(<a href={url}>{name}</a>);
        } else {
          message.error(`Upload completed but no URL received.`);
        }
      } else if (status === 'error') {
        message.error(`${name} file upload failed.`);
      }
    },
  }), [dispatch]);

  return (
    <Upload {...uploadProps}>
      <StyledButton icon={<UploadOutlined />}>Escolha sua melhor foto !</StyledButton>
    </Upload>
  );
};

export default ImageUpload;
