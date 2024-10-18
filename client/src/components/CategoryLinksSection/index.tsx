import styles from './CategoryLinksSection.module.scss'
import { Link } from 'react-router-dom'
import { useFetchCategories } from '../../hooks/useFetchCategories'
import Loader from '../UI/Loader'

const CategoryLinksSection: React.FC = () => {

  const { categories, isLoading, noCategories } = useFetchCategories()

  if (isLoading) {
      return <div className={styles.loaderContainer}><Loader /></div>
  }
  if (noCategories) {
    return <div>No categories available.</div>
  }

return (
  <section className={styles.container}>
    {categories.map(category => (
      <Link key={category.name} className={styles.cardContainer} to={`/catalog/${category.name.replace(/\s+/g, '-').toLowerCase()}`}>
        <img src={category.icon} />
        <h3>{category.name}</h3>
      </Link>
    ))}
  </section>
)
}

export default CategoryLinksSection