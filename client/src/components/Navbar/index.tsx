import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { menuItems } from '../../data/menuItems'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { useState } from 'react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.burgerIcon} onClick={handleOpen}>
          <RxHamburgerMenu />
        </div>
        {menuItems.map(item => (
          <Link key={item.name} className={styles.navBarLink} to={item.path}>
            <div>{item.name}</div>
          </Link>
        ))}
      </div>

      <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuClose}>
          <IoMdClose onClick={handleOpen} />
        </div>
        {menuItems.map(item => (
          <Link key={item.name} className={styles.dropdownMenuItem} to={item.path}>
            <div>{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
