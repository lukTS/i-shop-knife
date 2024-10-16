import { useDispatch, useSelector } from 'react-redux'
import UiButton from '../UI/UiButton'
import styles from './PlaceOrder.module.scss'
import { Link } from 'react-router-dom'
import { sendingOrder } from '../../store/cartThunks'
import { BsArrowLeft } from "react-icons/bs"
import { toast } from 'react-toastify'
import { clearCart } from '../../store/cartSlice'
import { RootState, AppDispatch } from '../../store'

const PlaceOrder: React.FC = () => {

  const dispatch: AppDispatch = useDispatch()
  const cartProducts = useSelector((state: RootState ) => state.cart.cartProducts)
  const user = useSelector((state: RootState ) => state.auth.user)
  const oderStatus = useSelector((state: RootState ) => state.cart.oderStatus)
  const totalPrice = useSelector((state: RootState ) => state.cart.totalPrice)

  function handleSendingOrder(e: React.MouseEvent<HTMLButtonElement> ) {
    e.preventDefault()
    if(user) dispatch(sendingOrder({user, cartProducts, totalPrice}))
    console.log(oderStatus)
    dispatch(clearCart())
    toast.success('Your order has been received.')
  }

  return (
    <div className={styles.container}>
      {oderStatus === 'idle' ? <>
      <h1>Place order</h1>
      <h3>You have chosen</h3>
      <p>{
        cartProducts.map((item) => {
          return (<span key = {item.product.id}> {item.product.name}  -  {item.quantity} pieces, </span>)
        })
      }</p>
      <h3>Payment methods</h3>
      <p>Unfortunately, at the moment, our online store only supports cash on delivery. Electronic payment methods are not yet available. We apologize for the temporary inconvenience.</p>
      <h3>Order made</h3>
      <p>{user?.firstName} {user?.lastName}</p>
      <h3>Delivery address</h3>
      <p>{user?.address}</p>
      <h3>Phone number</h3>
      <p>{user?.phone}</p>
      <h3></h3>
      <div className={styles.buttonContainer}>
        <Link to = '/cart'>
          <UiButton className={styles.buttonCorrection}> <BsArrowLeft className={styles.arrow} /> Returned to cart</UiButton>
        </Link>
        <UiButton onClick ={handleSendingOrder} className={styles.buttonCorrection}>Confirm order</UiButton>
      </div></> : <p className={styles.succeededOder}>Your order has been received and will be processed and shipped shortly.</p>}
    </div>
  )
}

export default PlaceOrder