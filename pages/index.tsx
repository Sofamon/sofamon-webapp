import Head from "next/head";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>Sofamon</title>
          <script
            src="https://public.cypherd.io/js/onboardingsdk.js"
            async
          ></script>
        </Head>
        <Banner />
      </>
    </Layout>
  );
}
