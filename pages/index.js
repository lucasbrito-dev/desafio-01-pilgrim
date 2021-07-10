/* eslint-disable react/jsx-key */
import Head from 'next/head'
import ListaProduto from '../components/ListaProduto'

export default function Home({conteudos}) {
  return (
    <div>
      <Head>
        <title>The Pilgrim</title>
        <meta name='keywords' content='audiolivros, ebooks, novidades, pilgrim, teologia' />
      </Head>

      <ListaProduto conteudos={conteudos} indexConteudo={0}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://my-json-server.typicode.com/filipeveronezi/fake-api/categories`)
  const conteudos = await res.json()

  return {
    props: {
      conteudos
    }
  }
}