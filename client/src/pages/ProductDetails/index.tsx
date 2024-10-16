import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import styles from './ProductDetails.module.scss';
import { useEffect } from "react";
import { fetchProducts } from '../../store/productsThanks'
import UiButton from "../../components/UI/UiButton";
import { toast } from 'react-toastify'
import { addToCart } from '../../store/cartSlice'
import { RootState, AppDispatch } from '../../store'
import { Product } from "../../types/Product";

const ProductDetails: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const { products, status } = useSelector((state: RootState) => state.products)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    toast.success(`The ${product?.name} has been successfully added to the cart`)
}

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])

  const product: Product | undefined = products.find(item => item.id === id)

  // Отображение состояния загрузки или ошибки
  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error loading product</p>

  return (
    <>
      <Header />
      <div className={styles.container}>
        {product ? (
          <>
            <h1>{product.name}</h1>
            <div className={styles.containerContent}>
              <img className={styles.mainPicture} src={product.image_url} alt={product.name} />
              <div>
                <h3>Product Details</h3>
                <ul>
                  {product.features.map(item => (
                    <li key={item.name}><b>{item.name}</b>: {item.value}</li>
                  ))}
                </ul>
                <h3>Product Description</h3>
                <div>{product.longDescription}</div>
              </div>
            </div>
            <div className={styles.containerPrice}>
              <div className={styles.price}>Price: {product.price} $</div>
              <UiButton onClick={handleAddToCart}>Add to Cart</UiButton>
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails