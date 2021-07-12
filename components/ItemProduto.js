import Link from 'next/link'
import produtoStyles from '../styles/Produto.module.css'
import Image from 'next/image'

const ItemProduto = ({ produto, idCategoria }) => {
    return (
        <Link href='/categoria/[id_cat]/produto/[id_prod]' as={`/categoria/${idCategoria}/produto/${produto.id}`}>
            <a className={produtoStyles.card}>
                <h3>{produto.title} &rarr;</h3>
                <Image src={produto.cover_path} alt={produto.title} width={240} height={350}/>
            </a>
        </Link>
    )
}

export default ItemProduto
