import products from '../data/products.json'
import ProductCard from './ProductCard'
import './Products.css'

function Products() {
  return (
    <div className="products">
      {products.map(product =>
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  )
}

export default Products
