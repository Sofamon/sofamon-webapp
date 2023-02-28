import Head from 'next/head'
import Layout from '../components/Layout'
import MintComponent from '../components/Mint'

export default function Mint() {
  return (
    <Layout>
      <>
        <Head>
          <title>Sofamon</title>
        </Head>
        <MintComponent />
      </>
    </Layout>
  )
}
