import styles from './ProductCard.module.scss'
import UiButton from '../UI/UiButton'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { ProductCardProps } from '../../types/Product'

const ProductCard: React.FC <ProductCardProps> = ({product}) => {
  const {name, shortDescription, price, image_url, _id} = product
  const dispatch: AppDispatch = useDispatch()
  const handleAddToCart = () => {
      dispatch(addToCart(product))
      toast.success(`The ${name} has been successfully added to the cart`)
  }
  return (
      <div className={styles.productCard}>
        <img src={image_url} alt={name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h2 className={styles.productName}>{name}</h2>
          <Link to = {`/product/${product._id}`}>
            <p className={styles.productDescription}>{shortDescription}<span className={styles.productDescriptionMore}> more</span></p>
         </Link>
          <div className={styles.productFooter}>
            <span className={styles.productPrice}>${price}</span>
            <UiButton onClick={handleAddToCart}>Add to Cart</UiButton>
          </div>
        </div>
      </div>
    )
  }

  export default ProductCard