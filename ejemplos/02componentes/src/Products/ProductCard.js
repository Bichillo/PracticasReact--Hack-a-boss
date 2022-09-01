function ProductCard({ product }) {
  return (
    <article className="product">
      <h3>{product.title}</h3>
      <span className="price">{product.price} €</span>
      <div className="image" style={{ backgroundImage: `url("${product.image}")` }} />
      {product.rating.count >= 400 &&
        <span className="featured">Destacado</span>
      }
    </article>
  )
}

export default ProductCard
