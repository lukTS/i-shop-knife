import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import styles from './Wholesale.module.scss'

const Wholesale: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <h1>Exclusive Privilege Program for Wholesale Clients</h1>
    <div className={styles.container}>
      <img src="/images/opt.jpg" alt="Wholesale" />
      <div>
        <p>We highly value our wholesale buyers and aim to offer the best possible terms for cooperation. That's why we've developed a special bonus program that allows you to not only purchase high-quality knives at wholesale prices but also enjoy additional benefits, discounts, and bonuses.</p>
        <h3>1. Volume-Based Discounts</h3>
        <p>The more you buy, the better your conditions! We offer a flexible discount system based on the volume of your order:</p>
        <ul>
          <li>For orders of 50 to 100 knives — 5% discount.</li>
          <li>For orders of 101 to 200 knives — 10% discount.</li>
          <li>For orders over 200 knives — 15% discount.</li>
        </ul>
        <p>This system allows you to save more with every new order and provides flexibility for your purchasing planning.</p>
        <h3>2. Bonus Points for Every Purchase</h3>
        <ul>
          <li>For every 1,000 rubles spent, you receive 50 bonus points.</li>
          <li>1 point = 1 ruble. Accumulated points can be used to partially or fully pay for your next purchases.</li>
        </ul>
        <p>For example, if you place an order worth 50,000 rubles, you will receive 2,500 points, which you can apply toward your next order, making your purchases even more profitable!</p>
        <h3>3. Free Shipping for Regular Customers</h3>
        <p>For our regular customers who place orders totaling more than 100,000 rubles per month, we offer free shipping. This helps you save on logistics and focus on growing your business without worrying about additional costs.</p>
        <h3>4. Special Offers and Exclusive Deals</h3>
        <p>Only for our wholesale partners, we periodically launch special promotions and sales available exclusively through your personal account. You'll be the first to know about new products, exclusive knives, and items available at special prices.</p>
        <p>Additionally, by subscribing to our newsletter, you'll receive regular updates about upcoming discounts and special offers. This allows you to stay informed of all the best deals and plan your purchases in advance.</p>
        <h3>5. Personal Manager</h3>
        <p>For your convenience, we provide each wholesale buyer with a personal manager. Your manager will always be available to help you place orders, consult you on the product range, or clarify cooperation terms. A personalized approach ensures that all your questions are promptly resolved, enhancing the level of service.</p>
        <h3>6. Extended Warranties and Special Return Conditions</h3>
        <p>We are confident in the quality of our knives, so we offer wholesale buyers an extended warranty on all products — 2 years from the date of purchase. If any defects or manufacturing faults are found, we guarantee a replacement or refund within 14 days.</p>
        <div className={styles.program}>Our bonus program is designed to make working with us not only profitable but also convenient. Join our list of partners, and we guarantee that your business will thrive alongside us!</div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Wholesale
