import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { menuItems } from '../../data/menuItems'

const Navbar: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        {menuItems.map(item => 
          (<Link key={item.name} className={styles.navBarLink} to ={item.path}>
            <div>{item.name}</div>
          </Link>)
        )}
      </div>
    </div>
  )
}

export default Navbar