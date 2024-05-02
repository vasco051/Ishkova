import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import Breadcrumbs from "components/ui/breadcrumbs";
import { UserItem } from "./user-item";

import { TBreadcrumbsItem } from "components/ui/breadcrumbs/types.ts";


import { dynamicLinks, staticLinks } from "config/routingLinks.ts";

import styles from "./styles.module.scss";
import { Search } from "../tests/search";
import { EmptyItem } from "./empty-item";

export const ResultsPage = observer(() => {
  const store = useStore()
  const testStore = store.test
  const userStore = store.user

  const {testId} = useParams()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    testStore.fetchTest(+testId!)
    userStore.fetchTestUsers(+testId!, searchParams.toString())
  }, [testId])

  useEffect(() => {
    userStore.fetchTestUsers(+testId!, searchParams.toString())
  }, [searchParams]);

  const breadcrumbsItems: TBreadcrumbsItem[] = [
    {
      title: 'Тесты',
      link: staticLinks.tests
    },
    {
      title: testStore.currentTest?.title ?? 'Выбранный тест',
      link: dynamicLinks.test(testStore.currentTest?.id!)
    },
    {
      title: 'Результаты',
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Breadcrumbs items={breadcrumbsItems}/>

          <Search queryName='name'/>

          <ul className={styles.list}>
            {userStore.users.length
              ? (
                userStore.users.map(user => (
                  <UserItem item={user} key={user.id}/>
                ))) : (
                <EmptyItem/>
              )
            }
          </ul>
        </div>
      </div>
    </main>
  )
})