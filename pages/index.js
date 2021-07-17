/* eslint-disable react/jsx-key */
import Head from 'next/head'
import ListaProduto from '../components/ListaProduto'

export default function Home({categorias}) {
  var listasCategorias = []
  for(var i = 0; i < categorias.length; i++){
    listasCategorias.push(
      <>
        <h2>{categorias[i].title}</h2>
        <ListaProduto categorias={categorias} indexCategoria={i}/>
      </>
    )
  }
  return (
    <div>
      <Head>
        <title>The Pilgrim</title>
        <meta name='keywords' content='audiolivros, ebooks, novidades, pilgrim, teologia' />
      </Head>
      {listasCategorias}
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