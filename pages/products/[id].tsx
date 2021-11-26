function Product({ product}: any) {
    console.log(product)
    return (
        <>
            <div className="container">
                {product.title}
            </div>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // https://fakestoreapi.com/products/1
    const res = await fetch('https://fakestoreapi.com/products/1')
    const product = await res.json()

    return { props: { product } }
}

export default Product