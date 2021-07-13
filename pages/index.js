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

      <h2>{categorias[0].title}</h2>
      <ListaProduto categorias={categorias} indexCategoria={0}/>
      <h2>{categorias[1].title}</h2>
      <ListaProduto categorias={categorias} indexCategoria={1}/>
      <h2>{categorias[2].title}</h2>
      <ListaProduto categorias={categorias} indexCategoria={2}/>
      <h2>{categorias[3].title}</h2>
      <ListaProduto categorias={categorias} indexCategoria={3}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://my-json-server.typicode.com/filipeveronezi/fake-api/categories`)
  const categorias = await res.json()

  return {
    props: {
      categorias
    }
  }
}