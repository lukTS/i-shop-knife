import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import styles from './FreeShipping.module.scss'

const FreeShipping: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className={styles.container}>
      <div className={styles.containerLogoTransport}>
        <img src="/images/logoTransport1.jpg" alt="logoTransport1" />
        <h1>Customer Care and Free Shipping on Orders Over $500</h1>
        <img src="/images/logoTransport2.jpg" alt="logoTransport2" />
      </div>
      <div className={styles.containerPhotoTransport}>
        <img src="/images/transport1.jpg" alt="transport1" />
        <img src="/images/transport2.jpg" alt="transport2" />
        <img src="/images/transport3.jpg" alt="transport3" />
        <img src="/images/transport4.jpg" alt="transport4" />
      </div>
      <p>We value each customer and strive to provide you with the best service, as your satisfaction is our top priority. Every purchase is not just a transaction for us, but an opportunity to make your experience with our store as comfortable, quick, and enjoyable as possible. We understand that choosing a product is an important decision, which is why we do everything we can to offer a wide range of items, detailed descriptions, and quality photos to help you easily find exactly what you need.</p>
      <p>Our team is always ready to assist you at every stage of your purchase, from selecting the items to receiving them. If you have any questions or need to clarify order details, our support team is always available to respond to your inquiries. We take pride in offering prompt and friendly help to every customer.</p>
      <p>We understand that shopping is not only about selecting a product but also about its delivery. We aim to make this process fast and convenient, ensuring that your orders reach you in the shortest possible time with minimal effort on your part. It’s important to us that your purchases arrive safely, no matter where you are located. We work with trusted courier services that ensure reliable and timely delivery.</p>
      <p>It is essential for us not only to meet your expectations but to exceed them. That’s why we’ve developed a special program for our loyal customers, allowing them to receive additional bonuses and discounts. One of the key advantages we offer is free shipping on all orders over $500. This is our way of showing gratitude for your trust and for choosing us among many other stores.</p>
      <p>When you make a purchase over $500, you automatically qualify for free shipping. This means you don’t have to worry about extra shipping costs—we handle all the logistics to ensure your order is delivered quickly and without any additional expense on your part.</p>
      <p>We believe this offer will make your shopping experience in our store even more enjoyable and beneficial. No matter where you are, we’re ready to organize shipping promptly and with the utmost care. Every order is not just a responsibility for us but a chance to express our appreciation to you, our customer.</p>
      <p>We are always striving to offer you more than just products. It’s important to us that you feel cared for at every stage of your interaction with us, whether it’s choosing products, placing an order, or receiving your purchase. Your trust and choice are our greatest values, and we are ready to do everything we can to ensure every purchase leaves you with positive emotions.</p>
      <p>Thank you for choosing our store and trusting us!</p>
    </div>
    <Footer />
    </>
  )
}

export default FreeShipping
