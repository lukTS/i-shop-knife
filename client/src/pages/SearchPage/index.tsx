import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useSelector } from "react-redux"
import ProductCard from '../../components/ProductCard'
import styles from './SearchPage.module.scss'
import { RootState } from '../../store'

const SearchPage: React.FC = () => {
  const searchResults = useSelector((state:RootState) => state.search.searchResults)
  return (
    <>
      <Header />
      <h1>Search result for your request</h1>
      <div className={styles.cardContainer}>
        {searchResults.map((item) => <ProductCard key = {item._id} product = {item} /> )}
      </div>
      <Footer />
    </>
  )
}

export default SearchPage
