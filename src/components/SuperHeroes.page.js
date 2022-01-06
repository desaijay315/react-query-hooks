import { useEffect } from 'react'
import { client } from '../utils/api-client'
import {useAsync} from '../hooks/useAsync'

async function bootstrapAppData() {
  let data = null;
  const resp = await client({ url: '/superheroes' });
  data = resp.data
  return data
}


export const SuperHeroesPage = () => {

  const {
    isError,
    isIdle,
    isSuccess,
    data,
    error,
    isLoading,
    run,
  } = useAsync()

  console.log(isLoading, error, isError, isSuccess, isIdle)

  useEffect(() => {
    const appDataPromise = bootstrapAppData()
    run(appDataPromise)
  }, [run])


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error}</h2>
  }

  return (
    <>
    <pre>{JSON.stringify(data, null, 2) }</pre>
      <h2>Super Heroes Page</h2>
      {isSuccess && data && data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
