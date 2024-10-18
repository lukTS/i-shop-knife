import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CardCatalogMenu from '../../components/CardCatalogMenu'
import styles from './Catalog.module.scss'
import { useFetchCategories } from '../../hooks/useFetchCategories'
import { Category } from '../../types/Category'
import Loader from '../../components/UI/Loader'

const Catalog: React.FC = () => {
  const { categories, isLoading, noCategories } = useFetchCategories()

  if (isLoading) {
      return <div className={styles.loaderContainer}><Loader /></div>
  }
  if (noCategories) {
    return <div>No categories available.</div>
  }

  return (
    <>
      <Header />
      <Navbar />
      <h1 className={styles.catalogTitle}>Knife catalog</h1>
      <ul className={styles.container}>
          {categories.map((category:Category) => (
            <li key={category._id}>
              <Link to={`/catalog/${category.name.replace(/\s+/g, '-').toLowerCase()}`}>
                <CardCatalogMenu category = {category} />
              </Link>
            </li>
          ))}
      </ul>
      <Footer />
    </>
  )
}

export default Catalog
