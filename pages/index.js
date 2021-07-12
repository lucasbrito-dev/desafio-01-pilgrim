/* eslint-disable react/jsx-key */
import Head from 'next/head'
import ListaProduto from '../components/ListaProduto'

export default function Home({categorias}) {
  return (
    <div>
      <Head>
        <title>The Pilgrim</title>
        <meta name='keywords' content='audiolivros, ebooks, novidades, pilgrim, teologia' />
      </Head>

      <ListaProduto categorias={categorias} indexCategoria={0}/>
    </div>
  )
}

export const getStaticProps = async () => {
  console.log("Entrando no getStaticProps...")
  const res = await fetch(`https://my-json-server.typicode.com/filipeveronezi/fake-api/categories`)
  const categorias = await res.json()

  return {
    props: {
      categorias
    }
  }
}