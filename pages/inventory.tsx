import Head from 'next/head'
import Layout from '../components/Layout'
import InventoryComponent from '../components/Inventory'

export default function Inventory() {
  return (
    <Layout>
      <Head>
        <title>Sofamon</title>
      </Head>
      <InventoryComponent />
    </Layout>
  )
}
