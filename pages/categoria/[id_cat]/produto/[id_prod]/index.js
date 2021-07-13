import Image from 'next/image'
import Link from 'next/link'

/* eslint-disable react-hooks/rules-of-hooks */
const Produto = ({ categoria, id_prod }) => {
    const produtosFiltrados = categoria.products.filter(produto => produto.id == id_prod)
    if(produtosFiltrados.length > 0){
        const produtoSelecionado = produtosFiltrados[0]
        const mensagemFiltragem = produtosFiltrados.length === 1 ? "Produto (único) encontrado!" : "CUIDADO!! Id de produto duplicado. Primeiro selecionado."
        return (
            <>
                <h1>{produtoSelecionado.title}</h1>
                <p>
                    <Image src={produtoSelecionado.cover_path} alt={produtoSelecionado.title} width={240} height={350}/><br />
                    Autor: {produtoSelecionado.author}<br />
                    Editora: {produtoSelecionado.publisher}<br />
                    Formato: {produtoSelecionado.format_type}
                </p>
                <br />
                <Link href='/'>&larr;Voltar</Link>
            </>
        )
    }
    else{
        return (
            <>
                <h3>Produto não encontrado...</h3>
                <p>Desculpe o transtorno, o produto não se encontra no estoque :( </p>
                <br />
                <Link href='/'>&larr;Voltar</Link>
            </>
        )
    }
    
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://my-json-server.typicode.com/filipeveronezi/fake-api/categories/${context.params.id_cat}`)

    const categoria = await res.json()

    return {
        props: { 
            categoria,
            id_prod: context.params.id_prod
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://my-json-server.typicode.com/filipeveronezi/fake-api/categories`)

    const categorias = await res.json()

    var paths = []
    for(var i = 0; i < categorias.length; i++){
        for(var j = 0; j < categorias[i].products.length; j++){
            paths.push({
                params: {
                    id_cat: categorias[i].id.toString(),
                    id_prod: categorias[i].products[j].id.toString()
                }
            })
        }
    }

    return {
        paths,
        fallback: false,
    }
}

export default Produto
