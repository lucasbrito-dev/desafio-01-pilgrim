/* eslint-disable react/jsx-key */
import produtoStyles from '../styles/Produto.module.css'
import ItemProduto from './ItemProduto' 

const ListaProduto = ({categorias, indexCategoria}) => {
    return (
        <div className={produtoStyles.grid}>
            {categorias[indexCategoria].products.map((produto) => (
                <ItemProduto produto={produto} idCategoria={categorias[indexCategoria].id}/>
            ))}
        </div>
    )
}

export default ListaProduto
