import { Link } from "react-router-dom";

import { dynamicLinks } from "config/routingLinks.ts";

import { TTest } from "types/entities/TTest.ts";

import styles from './styles.module.scss'

interface ITestItemProps {
  item: TTest
}

export const TestItem = ({item}: ITestItemProps) => {
  const linkToTestPage = dynamicLinks.test(item.id)

  return (
    <li>
      <Link to={linkToTestPage} className={styles.item}>
        <h4 className={styles.title}>{item.title}</h4>
        {item.description && <p className={styles.description}>{item.description}</p>}
      </Link>
    </li>
  )
}