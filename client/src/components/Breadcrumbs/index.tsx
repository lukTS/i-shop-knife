import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import breadcrumbConfig from '../../data/breadcrumbConfig'

// Defining an interface for breadcrumbs
interface Breadcrumb {
  name: string
  pathname: string
}

// Defining a type for breadcrumbConfig
interface BreadcrumbConfig {
  [key: string]: string
}

// Function to find the name of a breadcrumb
const findBreadcrumbName = (path: string, config: BreadcrumbConfig): string => {
  for (const [key, value] of Object.entries(config)) {
    const regex = new RegExp(`^${key.replace(/:\w+/g, '[^/]+')}$`);
    if (regex.test(path)) {
      return value
    }
  }
  return path
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]) 

  useEffect(() => {
    const pathnames = location.pathname.split('/').filter(x => x)
    let breadcrumbs: Breadcrumb[] = [] 

    if (pathnames[0] === 'product') {
      breadcrumbs = [
        { name: 'Home', pathname: '/' },
        { name: 'Catalog', pathname: '/catalog' },
        { name: 'Product Details', pathname: '' } // Empty pathname for current page
      ]
    } else {
      breadcrumbs = pathnames.map((_, index) => {
        const pathname = `/${pathnames.slice(0, index + 1).join('/')}`

        return {
          name: findBreadcrumbName(pathname, breadcrumbConfig),
          pathname,
        }
      })

      breadcrumbs = [{ name: 'Home', pathname: '/' }, ...breadcrumbs]
    }

    setBreadcrumbs(breadcrumbs);
  }, [location])

  return (
    <nav>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.pathname}>
          {index > 0 && ' / '}
          {breadcrumb.pathname ? (
            <Link to={breadcrumb.pathname}>{breadcrumb.name}</Link>
          ) : (
            <span>{breadcrumb.name}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumbs