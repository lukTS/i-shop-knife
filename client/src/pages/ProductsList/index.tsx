import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from '../../store/productsThanks'
import { useParams } from "react-router-dom"
import styles from './ProductsList.module.scss'
import { AppDispatch, RootState } from '../../store'

const ProductsList: React.FC = () => {
  const { categoryName } = useParams()
  const dispatch: AppDispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.products)
  console.log(products)
  const productStatus = useSelector((state: RootState) => state.products.status)
  const categories = useSelector((state: RootState) => state.categories.categories) 
  const categoryNameH1 = categoryName
    ? categoryName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
    : 'Products'; // Значение по умолчанию, если categoryName undefined

  useEffect(() => {
      if (categoryName === 'all-categories') {
          dispatch(fetchProducts(null)) 
      } else {
          const category = categories.find(cat => cat.name.replace(/\s+/g, '-').toLowerCase() === categoryName)
          
          if (category) {
              dispatch(fetchProducts(category.id)) 
          }
      }
  }, [dispatch, categoryName, categories])

  if (productStatus === 'loading') {
      return <div>Loading...</div> 
  }

  return (
    <div>
      <Header />
      <Navbar />
      <h1>{categoryNameH1}</h1>
      <div className={styles.cardContainer}> 
        {products.map(product => <ProductCard key = {product.id} product = {product} />)}
      </div>
      <Footer />
    </div>
  )
}

export default ProductsList