import Link from 'next/link'
import Image from 'next/image'

const ItemProduto = ({ produto, idCategoria }) => {
    return (
        <Link href='/categoria/[id_cat]/produto/[id_prod]' as={`/categoria/${idCategoria}/produto/${produto.id}`}>
            <a className="m-4 p-6 text-left no-underline hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600" style={{color: 'inherit', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease border-color 0.15s ease', width: '45%'}}>
                <h3>{produto.title} &rarr;</h3>
                <Image src={produto.cover_path} alt={produto.title} width={240} height={350}/>
            </a>
        </Link>
    )
}

export default ItemProduto
