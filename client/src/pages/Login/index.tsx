import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import styles from './Login.module.scss'
import UIInput from '../../components/UI/UIInput'
import { useDispatch, useSelector } from 'react-redux'
import UiButton from '../../components/UI/UiButton'
import Footer from '../../components/Footer'
import { loginUser, loginWithGoogle } from '../../store/authThunks'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'
import { AppDispatch, RootState } from '../../store'
import { CredentialResponse } from '@react-oauth/google'


const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

  const dispatch: AppDispatch = useDispatch()
  const { status, error } = useSelector((state:RootState) => state.auth)

  useEffect(() => {
    if (isSubmitting) {
      if (status === 'succeeded') {
        toast.success('Log in was successful!')
        setIsSubmitting(false);
      } else if (status === 'failed') {
        toast.error(`Log in failed: ${error}`)
        setIsSubmitting(false);
      }
    }
  }, [status, error, isSubmitting])

  useEffect(() => {
    const gIdOnload = document.createElement('div');
    gIdOnload.id = 'g_id_onload'
    if(clientId) gIdOnload.setAttribute('data-client_id', clientId)
    gIdOnload.setAttribute('data-login_uri', 'http://localhost:3000/login/google')
    gIdOnload.setAttribute('data-auto_prompt', 'false')
    document.body.appendChild(gIdOnload)

    const gIdSignin = document.createElement('div')
    gIdSignin.className = 'g_id_signin'
    gIdSignin.setAttribute('data-type', 'standard')
    document.body.appendChild(gIdSignin)

    return () => {
      document.body.removeChild(gIdOnload)
      document.body.removeChild(gIdSignin)
    };
  }, []);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    dispatch(loginUser({ email, password }))
    setEmail('')
    setPassword('')
  }

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    try {
      if (response.credential) {
        const decoded = jwtDecode(response.credential) // Декодируем JWT-токен Google
        console.log('Google User:', decoded) // Выводим декодированные данные для проверки
        
        // Отправляем токен на сервер для аутентификации
        dispatch(loginWithGoogle(response.credential)) // Отправляем сам токен
        setIsSubmitting(true)
      } else {
        throw new Error('No credential found in response')
      }
    } catch (error) {
      console.error('Google login error:', error)
    }
  }

  const handleGoogleFailure = () => {
    console.log("Google login failed")
  };

  return (
    <div>
      <Header />
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <form className={styles.registrationForm} onSubmit={handleLogin}>
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
          <UiButton type='submit' className={styles.buttonStyleCorrection} disabled={status === 'loading'}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </UiButton>
          <div className={styles.googleContainer}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login