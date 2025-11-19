import { useState } from "react";
import axiosInstance from "../../../lib/api";

const useProductDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [productDetail, setProductDetail] = useState(null);

  const openProductModal = async (id) => {
    setModalOpen(true);
    setDetailLoading(true);
    setDetailError("");
    setProductDetail(null);

    try {
      const token = localStorage.getItem("token");
      const res = await axiosInstance.get(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductDetail(res?.data);
    } catch (err) {
      setDetailError(err?.response?.data?.message || "Failed to load product");
    } finally {
      setDetailLoading(false);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setDetailLoading(false);
    setDetailError("");
    setProductDetail(null);
  };
  return {
    closeModal,
    openProductModal,
    modalOpen,
    detailError,
    detailLoading,
    productDetail,
  };
};

export default useProductDetails;
