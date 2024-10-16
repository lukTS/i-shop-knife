import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Cart.module.scss'
import ProductCardCart from '../../components/ProductCardCart'
import { useDispatch, useSelector } from 'react-redux'
import UiButton from '../../components/UI/UiButton'
import { Link } from 'react-router-dom'
import { clearOderStatus } from '../../store/cartSlice'
import { RootState } from '../../store'

const cartNames = ['Picture', 'Name', 'Price, $', 'Quantity', 'Total, $', 'Delete']

const Cart: React.FC = () => {
  const cartProducts = useSelector((state:RootState) => state.cart.cartProducts)
  const totalPrice = useSelector((state:RootState) => state.cart.totalPrice)
  const dispatch = useDispatch()
  function handlePlaceOder() {
    dispatch(clearOderStatus())
  }
  return (
    <>
      <Header />
        <div className={styles.container}>
          <h1>Cart</h1>
          <div className={styles.cartTitle}>
            {cartNames.map((item) => <div className={styles.title} key ={item}>{item}</div>)}
          </div>
          <div className={styles.containerProducts}>
            {
              cartProducts.length > 0 
              ? cartProducts.map((item) => <ProductCardCart key = {item.product.id} cartProduct = {item} />) 
              : <p className={styles.emptyCart}>The Cart is empty</p>
            }
          </div>
          <div className={styles.containerPayButton}>
              { 
                cartProducts.length > 0 
                ? <>
                    <p className={styles.totalAmount}>Total amount: {totalPrice} $</p>
                    <Link to = '/cart/payment'>
                      <UiButton onClick={handlePlaceOder} className={styles.buttonCorrection}>Place Order</UiButton>
                    </Link>
                  </>
                : ''
              }
          </div>
        </div>
        
      <Footer />
    </>
  )
}

export default Cart
