import { Link } from "react-router-dom";

import { dynamicLinks } from "config/routingLinks.ts";

import { TUser } from "types/entities/TUser.ts";

import styles from './styles.module.scss'

interface IUserItemProps {
  item: TUser;
}

export const UserItem = ({item}: IUserItemProps) => {
  const numberTrueAnswers = item.answers.filter(answer => answer.isTrue).length

  return (
    <li>
      <Link to={dynamicLinks.result(item.testId, item.id)} className={styles.item}>
        <h4 className={styles.text}>{item.name}</h4>
        <span className={styles.text}>{numberTrueAnswers} / {item.answers.length}</span>
      </Link>
    </li>
  )
}