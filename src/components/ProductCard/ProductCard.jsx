import "./ProductCard.css";

export default function ProductCard({
  image,
  title,
  price,
  description,
  addProduct,
}) {
  return (
    <div
      id="card-container"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      className="col mb-5"
    >
      <div className="card h-100">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            <span className="price-tag">€{price}</span>
          </div>
          <div className="text-center description">{description}</div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={addProduct}
              type="button"
              className="btn btn-success"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
