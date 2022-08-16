import styles from './Cars.module.css'

const Cars = ({ brand, color, km }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Brand: {brand}</h1>
      <h2 className={styles.subtitle}>Color: {color}</h2>
      <h2 className={styles.subtitle}>Km: {km}</h2>
    </div>
  )
}

export default Cars