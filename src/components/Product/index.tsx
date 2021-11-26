import { Box, BoxContent, BoxImg, BoxTitle, BoxPrice, BoxLink } from './styles'
import Image from 'next/image'
import Link from 'next/link'

// Component
export default function Product ({product}: any) {
    return (
        <Box key={product.id}>
            <BoxContent>
                <BoxImg>
                    <Link href={"/products/" + product.id} passHref>
                        <a>
                            <img src={product.image} alt={product.title} />
                        </a>
                    </Link>
                </BoxImg>
                <BoxTitle>{product.title}</BoxTitle>
                <BoxPrice>R$ {product.price}</BoxPrice>
                <Link href={"/products/" + product.id} passHref>
                    <BoxLink>
                        Ver produto
                    </BoxLink>
                </Link>
            </BoxContent>
        </Box>
    )
}