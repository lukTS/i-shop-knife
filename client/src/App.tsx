import { Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/_global.scss'
import './styles/_variables.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import routesConfig from './data/routesConfig'

const App: React.FC = () => {
  return (
    <div className='container'>
      <ToastContainer
        position="top-center" // Позиция по умолчанию 
        autoClose={5000} // Время отображения уведомления 
        hideProgressBar={false} // Показывать ли прогресс-бар *
        newestOnTop={false} // Показывать новые уведомления поверх старых 
        closeOnClick={true} // Закрывать уведомление по клику 
        rtl={false} // Режим RTL 
        pauseOnHover={true} // Приостанавливать уведомление при наведении 
        draggable={true} // Разрешить перетаскивание 
        pauseOnFocusLoss={true} // Приостановить при потере фокуса 
      />
      <Routes>
        {routesConfig.map((rout) => <Route key = {rout.path} path={rout.path} element={<rout.component/>} />)}
      </Routes>
    </div>
  )
}

export default App
