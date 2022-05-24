
import styles from '../styles/Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.loading_container}>
            <h1>Carregando</h1>
            <div className={styles.loading}></div>
        </div>
    )
}