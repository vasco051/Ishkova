import IcCart from 'assets/icons/ic_cart.svg?react'
import styles from './styles.module.scss'

export const EmptyItem = () => {
  return (
    <li className={styles.emptyItem}>
      <IcCart className={styles.icon}/>
      <span className={styles.text}>
        Тесты по такому запросу отсутствуют.<br/>
        Попробуйте ввести другой поисковой запрос или уберите его полностью.
      </span>
    </li>
  )
}