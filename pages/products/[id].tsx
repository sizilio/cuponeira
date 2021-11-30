import Head from '../../src/partials/head'

function Product({product}: any) {
    return (
        <>
            <Head title={product.title} description={product.description} />
            <div className="container">
                {product.title}
                {product.image}
            </div>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps(context: any) {
    const { id } = context.query;

    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const product = await res.json()

    return { 
        props: { 
            product
        } 
    }
}

export default Product