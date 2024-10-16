import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UiButton from '../../components/UI/UiButton'
import UIInput from '../../components/UI/UIInput'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Registration.module.scss'
import { registerUser } from '../../store/authThunks'
import { toast } from 'react-toastify'
import { AppDispatch, RootState } from '../../store'

const Registration: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')

  const dispatch: AppDispatch = useDispatch()
  const { statusRegistration, errorRegistration } = useSelector((state:RootState) => state.auth)

  // Flag to track completion of registration action
  const [actionCompleted, setActionCompleted] = useState(false)

  useEffect(() => {
    if (statusRegistration === 'succeeded' && actionCompleted) {
      toast.success('Registration was successful!')
      setActionCompleted(false) // Reset flag after notification is shown
    } else if (statusRegistration === 'failed' && actionCompleted) {
      toast.error(`Registration failed: ${errorRegistration}`)
      setActionCompleted(false) // Reset flag after notification is shown
    }
  }, [statusRegistration, errorRegistration, actionCompleted]) // Restart effect when status or error changes

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      toast.error('Passwords do not match')
      return
    }

    // Check for minimum password length (6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      toast.error('Password must be at least 6 characters long')
      return
    }

    // Clearing errors before sending data
    setError('')

    dispatch(registerUser({ firstName, lastName, email, password, phone, address}));
    setActionCompleted(true) // Set a flag to show a notification after registration is complete

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setPhone('')
    setAddress('')
    setError('')
  }

  return (
    <div>
      <Header />
      <div className={styles.formContainer}>
        <h1>New user registration</h1>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          <UIInput
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            required
          />
          <UIInput
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            required
          />
          <UIInput
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail'
            required
          />
          <UIInput
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <UIInput
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            required
          />
          <UIInput
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone'
            required
          />
          <UIInput
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Address'
            required
          />
          {error && <p className={styles.error}>{error}</p>} {/* Отображение ошибок */}
          <UiButton type='submit' className={styles.buttonStyleCorrection} disabled={statusRegistration === 'loading'}>
            {statusRegistration === 'loading' ? 'Registering...' : 'Register'}
          </UiButton>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Registration