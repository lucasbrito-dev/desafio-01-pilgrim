import Head from 'next/head'

export default function Home({articles}) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>The Pilgrim</title>
        <meta name='keywords' content='audiolivros, ebooks, novidades, pilgrim, teologia' />
      </Head>
      <h1>Bem-vindo à Pilgrim</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://my-json-server.typicode.com/filipeveronezi/fake-api/categories`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}