import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import styles from './Contacts.module.scss'

const Contacts: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <h1>Contact us</h1>
    <div className={styles.container}>
      <img src="/images/contacts.jpg" alt="contacts" />
      <div>
        <p>If you have any questions about our products or would like to get additional information, feel free to contact us! We are always ready to help and provide you with all the necessary details. Whether you're interested in specifics about our knives, shipping options, or payment methods - don’t hesitate to reach out. We value every inquiry and strive to make your shopping experience as convenient and enjoyable as possible!</p>
        <div className={styles.containerAddress}>
          <p><b>Address:</b> Drapery Trading Center, No. 107 South Guangfu Road</p>
          <p><b>Phone:</b>+ 86 345 23 23 123</p>
          <p><b>E-mail:</b>allknife@gmail.com</p>
        </div>
      </div>
    </div>
    <Footer />      
    </>
  )
}

export default Contacts
