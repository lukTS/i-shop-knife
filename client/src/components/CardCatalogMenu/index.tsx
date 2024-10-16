import styles from './CardCatalogMenu.module.scss'
import { CardCatalogMenuProps } from '../../types/Category'

const CardCatalogMenu: React.FC <CardCatalogMenuProps> = ({category}) => {

  const {name, icon, img1, img2} = category

  return (
    <div className={styles.container}>
      <img className = {styles.cardImg} src={img1} alt={name} />
      <img className = {styles.cardIcon} src={icon} alt={name} />
      <h2 className = {styles.aaaa}>{name}</h2>
      <img className = {styles.cardImg} src={img2} alt={name} />
    </div>
  )
}

export default CardCatalogMenu