import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './PaymentPage.module.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PlaceOrder from '../../components/PlaceOrder'
import { RootState } from '../../store'


const PaymentPage: React.FC = () => {

  const statusRegistration = useSelector((state: RootState) => state.auth.status)

  return (
    <>
      <Header />
        <div className={styles.container}>
          {
            statusRegistration === 'succeeded' 
            ? <PlaceOrder />
            : <p className={styles.needRegistrationMessage}>
                To place your order you need to log in. Go to page
                <span> <Link to ='/login'>login</Link></span>.
              </p>
          }
        </div>
      <Footer />
    </>
  )
}

export default PaymentPage
