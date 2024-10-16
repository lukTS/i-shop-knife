import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './BonusProgram.module.scss'
import Navbar from '../../components/Navbar'

const BonusProgram: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h1>Bonus Program for Our Knife </h1>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src='/images/bonusprogram.jpg' alt='Bonus program'/>
        </div>
        <div>
          
          <h3>Dear Customers!</h3>
          <p>We are happy to welcome you to our online knife store, where you can find high-quality knives for every purpose. Whether you need a camping knife for hiking, a kitchen knife for preparing delicious meals, or a throwing knife for sport — we have it all! And to make your shopping experience even more rewarding, we’ve created a bonus program that allows you not only to save money but also to receive gifts and special privileges.</p>
          <h3>What is the bonus program?</h3>
          <p>Our bonus program is a unique opportunity for every customer to gain additional benefits from shopping in our store. As you make purchases, you accumulate bonus points that can be used to receive discounts on future orders or to participate in special promotions.</p>
          <p>Every time you buy knives or other products from our store, you earn bonus points. These points can then be redeemed for discounts, gifts, or special offers from our store. The more you shop, the more opportunities you have!</p>
          <h3>How does the bonus program work?</h3>
          <p>Here are the key points of our bonus program:</p>
          <ol>
            <li><b>Earning points: </b> For each purchase, you receive a certain number of bonus points. The amount of points earned depends on the total of your order and the product category. For example, you will earn more points for purchasing camping knives than for accessories.</li>
            <li><b>Using points:</b> The bonus points you collect can be used to receive discounts on future purchases. You decide how many points you want to apply when making a new order.</li>
            <li><b>Special offers: </b> As part of the bonus program, we regularly hold promotions and sales that are only available to our loyal customers. This could be an additional discount on popular knives, free shipping, or exclusive gifts with your order.</li>
          </ol>
          <h3>How to join the program?</h3>
          <p>Joining the bonus program is simple. All you need to do is make your first purchase in our store and contact our operator. The operator will explain all the details of the program and answer any questions you may have. Why contact the operator? We value each customer and want to ensure that you have all the necessary information to make the most out of your bonuses.</p>
          <p>The operator will not only explain how points are earned and used but will also help you register in the system so that you can track your points and receive notifications about special offers.</p>
          <h3>Why is it important to contact the operator?</h3>
          <ul>
            <li>Help you understand how bonus points are earned and redeemed.</li>
            <li>Inform you about current promotions available exclusively to program participants.</li>
            <li>Answer any questions you may have and provide personalized recommendations for using your points.</li>
            <li>Assist you in activating your bonus card and registering it in our system.</li>
          </ul>
          <h3>Benefits of participating in the bonus program</h3>
          <ol>
            <li><b>Save on purchases:</b> With every purchase, you accumulate points that can be used to get discounts on future orders.</li>
            <li><b>Exclusive offers: </b>Bonus program members are the first to hear about new sales and promotions. You will have access to special offers unavailable to other shoppers.</li>
            <li><b>Gifts and rewards: </b>For regular purchases, we provide additional bonuses such as gifts or special terms for buying new products.</li>
            <li><b>Personalized approach: </b>Our operators are always ready to help and offer you the best possible shopping conditions. You can be confident that you won't miss any advantageous offers.</li>
          </ol>
          <h3>Conclusion</h3>
          <p>Our bonus program is designed to make your shopping experience even more enjoyable and rewarding. We value every customer and strive to create a unique shopping experience. With simple point accumulation and the ability to redeem them for future purchases, you’ll always get the most out of your shopping. And if you have any questions or would like to know more, our operator is always ready to assist!</p>
          <p>We look forward to seeing you in our online knife store and hope that our bonus program will become a valuable and pleasant addition to your shopping experience!</p>
          <h3>Best regards,
          The All Knife Team</h3>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BonusProgram
