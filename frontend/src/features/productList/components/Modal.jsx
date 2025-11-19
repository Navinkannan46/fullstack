const Modal = ({ closeModal, detailError, detailLoading, productDetail }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
      <div className="relative z-10 w-full max-w-2xl mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold">
              {detailLoading ? "Loading.." : productDetail?.title}{" "}
            </h3>

            <button className="ml-4 text-gray-500 " onClick={closeModal}>
              X
            </button>
          </div>

          <div className="mt-4">
            {detailLoading && (
              <div className="text-gray-500">Fetching Details...</div>
            )}
            {detailError && <div className="text-red-100">{detailError}</div>}

            {!detailLoading && !detailError && productDetail && (
              <div className="space-y-4">
                <p className="text-black">{productDetail?.title} </p>
                <p className="text-gray-700">{productDetail?.description}</p>
                <p className="text-blue-400">{productDetail?.price || 0}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
