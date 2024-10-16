import Home from '../pages/Home'
import Login from '../pages/Login'
import Discount from '../pages/Discount'
import Registration from '../pages/Registration'
import Cart from '../pages/Cart'
import PaymentPage from '../pages/PaymentPage'
import UserProfile from '../pages/UserProfile'
import ProductDetails from '../pages/ProductDetails'
import About from '../pages/About'
import ProductsList from '../pages/ProductsList'
import Catalog from '../pages/Catalog'
import SearchPage from '../pages/SearchPage'
import BonusProgram from '../pages/BonusProgram'
import Contacts from '../pages/Contacts'
import Wholesale from '../pages/Wholesale'
import Certificates from '../pages/Certificates'
import FreeShipping from '../pages/FreeShipping'

interface routesConfigType {
  path: string
  component: React.FC
}

const routesConfig: routesConfigType[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/discount', component: Discount },
  { path: '/login/userprofile', component: UserProfile },
  { path: '/cart', component: Cart },
  { path: '/cart/payment', component: PaymentPage },
  { path: '/product/:id', component: ProductDetails },
  { path: '/catalog', component: Catalog },
  { path: '/catalog/:categoryName', component: ProductsList },
  { path: '/search', component: SearchPage },
  { path: '/bonusprogram', component: BonusProgram },
  { path: '/contacts', component: Contacts },
  { path: '/wholesale', component: Wholesale },
  { path: '/certificates', component: Certificates },
  { path: '/freeshipping', component: FreeShipping },
]

export default routesConfig