import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Discount.module.scss'
import Navbar from '../../components/Navbar'

const Discount: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h1>Discount for New Customers</h1>
      <div className={styles.container}>
        <div className={styles.imgContainer}><img src='/images/operator.jpg' alt='operator'/></div>
        <div>
          <h3>Dear Customers!</h3>
          <p>We are delighted to welcome you to our online store, where you can always find quality products at great prices. To express our gratitude for choosing us, we are launching a special discount program for new customers!</p>
          <h3>How It Works</h3>
          <p>Every customer who makes their first purchase at our store automatically becomes a participant in our loyalty program. We value each of you and want to make your shopping experience even more enjoyable and beneficial. After your first purchase, you can receive a 5% discount on your next purchase!</p>
          <h3>How to Get Your Discount</h3>
          <p>To activate your discount, all you need to do is contact our operator. This step is necessary for us to ask you a few questions that will help us better understand your preferences and needs. Your feedback is very important to us, which is why we conduct marketing research to improve our product range and level of service.</p>
          <p>Don’t worry! The questions will be simple and will only take a few minutes of your time. We are confident that the information you provide will help us become even better for you.</p>
          <h3>Why Do We Need This?</h3>
          <p>Your feedback is invaluable. We strive to create a store that meets all your expectations. By learning about your preferences, we can:</p>
          <ol>
            <li><b>Improve Our Product Range:</b> Based on your answers, we can offer you more relevant products that align with your interests.</li>
            <li><b>Optimize Our Services:</b> We are always open to change and are looking for ways to improve our service. Your suggestions will help us become even more convenient for you.</li>
            <li><b>Create a Unique Experience: </b> Every customer is unique, and it’s important for us that your interaction with our store is as comfortable and pleasant as possible.</li>
          </ol>
          <h3>Benefits of Participation</h3>
          <ul>
            <li><b>Discount on Your Next Purchase:</b> By receiving a 5% discount, you can save on your favorite products.</li>
            <li><b>Influence Store Development:</b> Participating in surveys and marketing research gives you the opportunity to share your thoughts and ideas that could change our product range and services for the better.</li>
            <li><b>Participation in Future Promotions: </b> We frequently hold various promotions and giveaways. By participating in our program, you will be the first to learn about new offers and opportunities.</li>
          </ul>
          <h3>How to Contact Our Operator</h3>
          <p>You can reach our operator by calling the number listed on our website or by writing to us in the chat. We are available for you from Monday to Friday, 9:00 AM to 6:00 PM. Feel free to ask any questions — we are here to help you!</p>
          <h3>Conclusion</h3>
          <p>We hope this program will not only be an opportunity for you to save but also a way to become part of our friendly family. Your support and interest in our store inspire us to achieve new heights. We look forward to seeing you in our online store and hope for a long-term partnership!</p>
          <p>Thank you for choosing our store, and we await your first purchase!</p>
          <h3>Best regards,
          The All Knife Team</h3>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Discount
