/* eslint-disable react/jsx-key */
import produtoStyles from '../styles/Produto.module.css'
import ItemProduto from './ItemProduto' 

const ListaProduto = ({conteudos, indexConteudo}) => {
    return (
        <div className={produtoStyles.grid}>
            {conteudos[indexConteudo].products.map((produto) => (
                <ItemProduto produto={produto} />
            ))}
        </div>
    )
}

export default ListaProduto
