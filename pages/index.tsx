import type { NextPage } from 'next'
import { ReactElement } from 'react'
import Agentur from '../common/components/Agentur/Agentur'
import Kontakt from '../common/components/Kontakt/Kontakt'
import Layout from '../common/components/Layout'
import Team from '../common/components/Team/Team'

const Home: NextPage = () => {
  return (
    <>
      {/* Components Content */}
      <Agentur />
      <Team />
      <Kontakt />
    </>
  )
}

// @ts-expect-error: Todo
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
