import styles from './SearchBar.module.scss'
import { IoSearchOutline } from "react-icons/io5"
import { SearchBarProps } from '../../../types/Ui'
import clsx from 'clsx'

const SearchBar: React.FC <SearchBarProps> = ({className, placeholder, onChange, onKeyDown, ...props }) => {
    return (
        <div className={clsx(className, styles.searchContainer)} {...props}>
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