import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { TbBrandX } from 'react-icons/tb'
import styles from './SocialLinks.module.scss'

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.socialIcons}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.correction}`}>
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
        <FaLinkedinIn />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.correction}`} >
        <FaYoutube />
      </a>
      <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.correction}`}>
        <TbBrandX />
      </a>
    </div>
  )
}

export default SocialLinks