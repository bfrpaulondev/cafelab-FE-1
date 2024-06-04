import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./swiper.css";
import ProductCard from "../ProductCard/ProductCard";

const SwiperCoverflowModalProduct = ({ currentProducts, setSelectedProducts, selectedProducts }) => {
  // Garantir que currentProducts seja uma matriz
  const products = Array.isArray(currentProducts) ? currentProducts : [];

  const handleProductSelect = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      alert("Você só pode selecionar até 3 produtos.");
    }
  };

  return (
    <div>
      <div>
        <h2>Produtos Selecionados: {selectedProducts.length === 0 ? "Máximo 3": selectedProducts.length}</h2>
        <ul></ul>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id.$oid}>
            <ProductCard
              product={product}
              isSelected={selectedProducts.includes(product)}
              onSelect={() => handleProductSelect(product)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCoverflowModalProduct;
