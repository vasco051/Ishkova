import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";

import { Button } from "components/ui-kit/buttons";
import { Input } from "components/ui-kit/input";

import styles from './styles.module.scss'

interface ISearchProps {
  queryName: string
}

export const Search = ({queryName}: ISearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const formik = useFormik({
    initialValues: {
      [queryName]: searchParams.get(`${queryName}_like`) ?? ''
    },
    onSubmit: values => {
      if (values[queryName]) searchParams.set(`${queryName}_like`, values[queryName])
      else searchParams.delete(`${queryName}_like`)

      setSearchParams(searchParams)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.search}>
      <Input value={formik.values[queryName]} onChange={formik.handleChange} id={queryName}/>
      <Button type='submit'>Поиск</Button>
    </form>
  )
}