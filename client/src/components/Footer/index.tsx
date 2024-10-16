import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import SocialLinks from '../UI/SocialLinks'
import {menuItems} from '../../data/menuItems'
import {knifesTypes} from '../../data/knifesTypes'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.gridContainer}>
        <Link className={styles.logo} to = '/'>
          <img  src='/images/LOGOW.png'/>
        </Link>
        <div className={styles.menu}>
          {menuItems.map(item => 
            (<Link key={item.name} className={styles.navLink} to ={item.path}>
              <div>{item.name}</div>
            </Link>)
          )}
        </div>
        <div className={styles.menu}>
          <div className={styles.categoryTitle}>KNIFE CATEGORIES</div>
          {knifesTypes.map(item => 
            (<Link key={item.name} className={styles.navLink} to ={item.path}>
              <div>{item.name}</div>
            </Link>)
          )}
        </div>
      </div>

      <div className={styles.socialCoContainer}>
        <p>&copy; All Knife company</p>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer