import Head from "next/head";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sofamon</title>
      </Head>
      <Banner />
      <Partners />
    </Layout>
  );
}

