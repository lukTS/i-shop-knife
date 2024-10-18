import { useDispatch } from 'react-redux'
import styles from './ProductCardCart.module.scss'
import { MdOutlineDeleteForever } from "react-icons/md"
import { removeFromCart, clearProductFromCart, addToCart } from '../../store/cartSlice'
import { BsPlusLg } from "react-icons/bs"
import { BsDashLg } from "react-icons/bs"
import { CartProductProps } from '../../types/Cart'

const ProductCardCart: React.FC <CartProductProps> = ({cartProduct}) => {
  const dispatch = useDispatch()
  console.log(cartProduct)
  const { name, image_url, price } = cartProduct.product

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartProduct.product))
  }
  function handleClearProductFromCart() {
    dispatch(clearProductFromCart(cartProduct.product))
  }
  function handleAddToCart() {
    dispatch(addToCart(cartProduct.product))
  }

  return (
    <div className={styles.container}>
      <img className={styles.item} src={image_url} alt={name}/>
      <div className={styles.item} >{name}</div>
      <div className={styles.item} >{price}</div>
      <div className={styles.item} >
        <div className={styles.quantityContainer}>
          <BsDashLg className={styles.plusMinus} onClick={handleRemoveFromCart}/>
          <div className={styles.quantityNumber}>{cartProduct.quantity}</div>
          <BsPlusLg className={styles.plusMinus} onClick={handleAddToCart}/>
        </div>
      </div>
      <div className={styles.item} >{price * cartProduct.quantity}</div>
      <div className={styles.item} ><MdOutlineDeleteForever className={styles.remove} onClick={handleClearProductFromCart}/></div>
    </div>
  )
}

export default ProductCardCart