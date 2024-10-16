import React, { useEffect, useState } from 'react'
import '../../styles/_global.scss'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import SearchBar from '../UI/SearchBar'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/authSlice'
import { toast } from 'react-toastify'
import Breadcrumbs from '../Breadcrumbs'
import { LiaHomeSolid } from 'react-icons/lia'
import { fetchSearchResult } from '../../store/searchThunck'
import { openCloseModalWindow } from '../../store/modalWindowSlice'
import { RootState, AppDispatch } from '../../store'
import UiButton from '../UI/UiButton'
import ModalWindow from '../UI/ModalWindow'

const Header:React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const authStatus = useSelector((state: RootState) => state.auth.status)
  const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen)
  const [logoutTriggered, setLogoutTriggered] = useState(false)

  const navigate = useNavigate()
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity)

  function handleLogOut() {
    dispatch(logout())
    setLogoutTriggered(true)
  }

  useEffect(() => {
    if (logoutTriggered && authStatus === 'idle') {
      toast.warning('You are logged out')
      setLogoutTriggered(false)
    }
  }, [authStatus, logoutTriggered])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(fetchSearchResult(searchQuery))
        .then(() => {
          navigate('/search')
          setSearchQuery('')
        })
        .catch(() => {
          toast.error('Error fetching search results')
        })
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const confirmLogout = () => {
    handleLogOut()
    dispatch(openCloseModalWindow(false))
  }

  const cancelLogout = () => {
    dispatch(openCloseModalWindow(false))
  }

  return (
    <header className={styles.container}>
      <Link to='/discount'>
        <img className={styles.discount} src='/images/baner.jpg' alt='Discount Banner'/>
      </Link>
      <div className={styles.grayBlock}>
        <div className={styles.homeContainer}>
          <LiaHomeSolid className={styles.homeMark} />
          <Breadcrumbs />
        </div>
        <div className={styles.cartAndAuth}>
          {user && authStatus === 'succeeded' ? (
            <div className={styles.grayBlockItem}>
              <Link to='/login/userprofile' className={styles.userLogIn}> 
                {user.firstName}
              </Link>
              <div> / </div>
              <Link to='#' onClick={() => dispatch(openCloseModalWindow(true))}> {/* Открыть модальное окно */}
                Log Out
              </Link>
            </div>
          ) : (
            <div className={styles.grayBlockItem}>
              <Link to='/login'>Login</Link>
              <div> | </div>
              <Link to='/registration'>Registration</Link>
            </div>
          )}
          <div>
            <Link to='/cart'>
              <div className={styles.cartInfoInContainer}>
                <span>Cart </span>
                <div className={styles.cart}><IoCartOutline /></div>
                <span className={styles.totalQuantity}> {totalQuantity} </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.containerSearch}>
        <div>
          <Link to='/'>
            <img className={styles.logo} src='/images/LOGO.png' alt='Logo'/>
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <SearchBar onChange={handleSearchChange} placeholder="Search..." onKeyDown={handleKeyPress} />
          <UiButton onClick={handleSearch}>Search</UiButton>
        </div>
        <Link to='/freeshipping'>
          <div className={styles.freeShippingContainer}>
            <p><strong>Free shipping worldwide</strong></p>
            <p>just place an order</p>
            <p>over $500</p>
          </div>
        </Link>
      </div>

      {/* Modal window */}
      <ModalWindow isOpen={isModalOpen} onClose={cancelLogout}>
        <p className={styles.exitTitle}>Are you sure you want to exit?</p>
        <div className={styles.containerModalWindowButton}>
          <UiButton className={styles.changeButtonYes} onClick={confirmLogout}>Yss</UiButton>
          <UiButton className={styles.changeButtonNo} onClick={cancelLogout}>No</UiButton>
        </div>
      </ModalWindow>
    </header>
  )
}

export default Header
