/* eslint-disable react/jsx-key */
import ItemProduto from './ItemProduto' 

const ListaProduto = ({categorias, indexCategoria}) => {
    return (
        <div className="flex items-center justify-center flex-wrap mt-12" style={{maxWidth: '800px'}}>
            {categorias[indexCategoria].products.map((produto) => (
                <ItemProduto produto={produto} idCategoria={categorias[indexCategoria].id}/>
            ))}
        </div>
    )
}

export default ListaProduto
