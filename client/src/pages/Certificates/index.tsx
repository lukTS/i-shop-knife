import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import styles from './Certificates.module.scss'

const Certificates: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <h1>Our Certified Products: Quality You Can Trust</h1>
    <div className={styles.container}>
      <p>At our company, we take great pride in offering products that meet the highest standards of quality and craftsmanship. All of our knives are fully certified and manufactured using state-of-the-art technologies. From sourcing premium materials to utilizing precision engineering, every step in the production process is designed to ensure that you receive a product you can rely on.</p>
      <p>Our certification guarantees that each knife not only meets industry regulations but also undergoes rigorous testing to ensure durability, sharpness, and performance. Whether you're looking for a tool for the kitchen, outdoor adventures, or professional use, you can trust that our knives are built to last.</p>
      <p>We utilize cutting-edge technology in the manufacturing process, allowing us to create products that combine tradition with innovation. Our focus on quality control means that we are involved in every stage of production, from the selection of raw materials to the final inspection of the finished product.</p>
      <p>We stand behind the quality of our knives and are confident in their performance. Each knife undergoes meticulous quality checks before it reaches your hands. In addition to meeting strict industry standards, our products are designed for optimal functionality and user satisfaction. We are committed to providing you with a product that not only meets your expectations but exceeds them.</p>
      <p>With our certified products, you can shop with confidence, knowing that every knife has been crafted with care, precision, and responsibility. We are proud to offer a product line that reflects our dedication to excellence and our commitment to you, our valued customers.</p>
      <div className={styles.containerCertificates}>
        <img src="/images/certificate1.jpg" alt="certificate1" />
        <img src="/images/certificate2.jpg" alt="certificate2" />
        <img src="/images/certificate3.jpg" alt="certificate3" />
        <img src="/images/certificate4.jpg" alt="certificate4" />
        <img src="/images/certificate5.jpg" alt="certificate5" />
        <img src="/images/certificate6.jpg" alt="certificate6" />
        <img src="/images/certificate7.jpg" alt="certificate7" />
        <img src="/images/certificate8.jpg" alt="certificate8" />
        <img src="/images/certificate9.jpg" alt="certificate9" />
        <img src="/images/certificate10.jpg" alt="certificate10" />
      </div>

    </div>
    <Footer />      
    </>
  )
}

export default Certificates
