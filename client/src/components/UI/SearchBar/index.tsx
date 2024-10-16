import styles from './SearchBar.module.scss'
import { IoSearchOutline } from "react-icons/io5"
import { SearchBarProps } from '../../../types/Ui'

const SearchBar: React.FC <SearchBarProps> = ({ placeholder, onChange, onKeyDown }) => {
    return (
        <div className={styles.searchContainer}>
            <IoSearchOutline className={styles.iconSearch}/>
            <input 
                type="text" 
                placeholder={placeholder} 
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default SearchBar