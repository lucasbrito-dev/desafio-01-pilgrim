import Link from 'next/link'
import produtoStyles from '../styles/Produto.module.css'
import Image from 'next/image'

const ItemProduto = ({ produto }) => {
    return (
        <Link href='/produto/[id]' as={`/produto/${produto.id}`}>
            <a className={produtoStyles.card}>
                <h3>{produto.title} &rarr;</h3>
                <Image src={produto.cover_path} alt={produto.title} width={400} height={450}/>
            </a>
        </Link>
    )
}

export default ItemProduto
