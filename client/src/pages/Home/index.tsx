import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewProducts } from '../../store/productsThanks'
import ProductCard from '../../components/ProductCard'
import styles from './Home.module.scss' 
import Slider from '../../components/Slider'
import CategoryLinksSection from '../../components/CategoryLinksSection'
import { AppDispatch, RootState } from '../../store'

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  
  useEffect(() => {
    if(statusNewProducts !== "succeeded") dispatch(fetchNewProducts())
  }, [dispatch])

  const newProducts = useSelector((state:RootState) => state.products.newProducts)
  const statusNewProducts = useSelector((state:RootState) => state.products.statusNewProducts)
  const errorNewProducts = useSelector((state:RootState) => state.products.errorNewProducts)

  if (statusNewProducts === 'loading') {
    return <div>Loading...</div> 
  }

  if (statusNewProducts === 'failed') {
    return <div>Error: {errorNewProducts}</div>
  }

  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <CategoryLinksSection />
      <div className={styles.titleContainer}>
        <h2><span className={styles.boldLine}>NEW ARRIVALS</span></h2>
      </div>
      <div className={styles.cardContainer}> 
        {newProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
