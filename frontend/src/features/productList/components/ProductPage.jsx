import useProductDetails from "../hooks/useProductDetails";
import useProducts from "../hooks/useProducts";
import Modal from "./Modal";

const ProductPage = () => {
  const { loading, error, fetchProducts } = useProducts();
  const {
    closeModal,
    openProductModal,
    modalOpen,
    detailError,
    detailLoading,
    productDetail,
  } = useProductDetails();

  return (
    <div className="p-6 max-w-6xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>
      {loading && <p className="text-gray-500">Loading... </p>}
      {error && <p className="text-red-500">{error} </p>}

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {fetchProducts.length === 0 && !loading && !error && (
          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              No Products Found
            </h2>
          </div>
        )}

        {fetchProducts.length > 0 &&
          fetchProducts?.map((item) => (
            <div
              key={item?._id}
              onClick={() => openProductModal(item?._id)}
              className="p-5 rounded-2xl  bg-white/60 backdrop-blur shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl   font-semibold text-gray-700 mb-2">
                {item?.title}
              </h2>

              <div className="text-lg font-bold text-indigo-600">
                ₹ {item?.price}
              </div>
            </div>
          ))}
      </div>

      {modalOpen && (
        <Modal
          closeModal={closeModal}
          detailError={detailError}
          detailLoading={detailLoading}
          productDetail={productDetail}
        />
      )}
    </div>
  );
};

export default ProductPage;
