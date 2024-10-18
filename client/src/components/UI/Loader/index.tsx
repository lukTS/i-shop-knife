import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader2}>
        <div className={styles.loader3}></div>
      </div>
    </div>
  )
}

export default Loader
