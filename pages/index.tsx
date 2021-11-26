import Head from '../src/partials/head'
import Product from '../src/components/Product'

function Home({ products }: any) {
  return (
    <>
      <Head title="Cuponeira" description="Página inicial da Cuponeira" />
      <div className="container">
        <h1>Sugestões para você</h1>

        <div className="products">
          {products.map((product: any) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}

export default Home