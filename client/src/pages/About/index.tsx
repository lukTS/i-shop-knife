import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './About.module.scss'
import Navbar from '../../components/Navbar'

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h1>The Art of Precision - Blades of Tradition</h1>
      <div className={styles.container}>
        <div className={styles.containerPhoto}>
          <img src='/images/skladnoi-nozh-strider-knives-1.jpg' alt='Precision Flyer' />
          <img src='/images/metatelnye-nozhi-2.jpg' alt='Precision Flyer' />
          <img src='/images/benchmade-1280-2.jpg' alt='Benchmade' />
          <img src='/images/dalton-kholder-nozhi-2.jpg' alt='Predator Elegance' />
          <img src='/images/nozh-dlia-oboev-1.jpg' alt='Spectrum Hunter' />
        </div>
        <div className={styles.containerText}>
          <p>In the early days, deep in the wilderness of the Carpathian Mountains, a family of skilled blacksmiths worked tirelessly at the heart of their village. This family was known not only for their unwavering dedication to their craft but also for the perfection and precision that defined every blade they forged. The patriarch of the family, Viktor, had learned the ancient art of blade-making from his father, who had inherited it from generations of craftsmen before him. Each blade wasn’t just a tool; it was a legacy.</p>
          <p>As Viktor worked, the sound of his hammer hitting the anvil echoed across the village, signaling the creation of something extraordinary. Every blade was made with meticulous care—care that transformed raw steel into a work of art, imbued with power, purpose, and precision. Over time, people from all across the region sought his expertise, knowing that a blade from Viktor’s workshop was more than just a knife—it was an extension of the person who wielded it.</p>
          <p>Years later, his grandson, who grew up watching his grandfather’s unwavering commitment to quality, wanted to bring this family tradition into the modern world. Thus, our knife store was born. But while the methods have evolved and we now work with state-of-the-art technology, the core principle remains the same: a perfect knife is not merely a tool; it’s a reflection of the craftsman’s soul.</p>
          <h2>The Craft</h2>
          <p>What sets our knives apart is not just the materials or the process but the ethos behind each one. Whether it’s a hunting knife, a camping knife, or a kitchen knife, our blades are forged with the same respect for the craft that Viktor carried with him. Every knife is hand-inspected, ensuring it meets the highest standards for sharpness, balance, and durability.</p>
          <h2>Materials Matter</h2>
          <p>We source only the finest materials from around the world to create our knives. Our blades are made from high-carbon stainless steel, ensuring they stay razor-sharp through years of use. The handles, meanwhile, are crafted from premium woods, G-10 fiberglass laminate, or ergonomic polymer—each material selected for its balance of comfort and durability.</p>
          <p>For our hunting knives, we use a special steel alloy designed to withstand the harshest conditions, while our kitchen knives are designed with chefs in mind, offering precision and control even in the busiest kitchen environments. The result? Knives that perform exceptionally, no matter the task.</p>
          <h2>Our Promise</h2>
          <p>At the heart of our business is a simple promise: to craft knives that honor our family’s history while embracing the needs of the modern world. Whether you're deep in the wilderness or preparing a meal for loved ones, our knives are designed to be reliable, versatile, and incredibly sharp. We believe that every knife should be a trusted companion, one that you can depend on in the most crucial moments.</p>
          <p>Our dedication to customer satisfaction runs as deep as our commitment to craftsmanship. From the moment you hold one of our knives in your hand, we want you to feel the balance, sharpness, and care that goes into each blade. That’s why we back every purchase with a lifetime guarantee.</p>
          <h2>From Our Workshop to Your Hand</h2>
          <p>Today, we’ve grown from a small, family-run workshop to an internationally recognized knife brand, shipping blades to outdoor enthusiasts, survivalists, hunters, and chefs worldwide. But no matter how far we’ve come, we’ll never forget our roots.</p>
          <p>The knives you find here are a product of centuries-old craftsmanship, combined with modern techniques that push the boundaries of performance. We invite you to explore our collection, knowing that every blade tells a story—a story that begins in the heart of the mountains and continues in your hand.</p>
          <p>Our journey, like our blades, is sharp, precise, and built to last.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
