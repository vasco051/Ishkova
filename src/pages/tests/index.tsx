import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Search } from "./search";
import { TestItem } from "./item";

import { description, title } from "data/tests.ts";

import styles from './styles.module.scss'
import { EmptyItem } from "./empty-item";

export const TestsPage = observer(() => {
  const testStore = useStore().test

  const [searchParams] = useSearchParams()

  useEffect(() => {
    testStore.fetchTests(searchParams.toString())
  }, [searchParams]);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.listWrapper}>
            <Search queryName='title'/>

            <ul className={styles.list}>
              {testStore.tests.length
                ? testStore.tests.map(test => (
                  <TestItem item={test} key={test.id}/>
                )) : (
                  <EmptyItem/>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
})