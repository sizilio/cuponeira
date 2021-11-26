import { Content, Topbar, Navbar, Nav, Navlink } from './styles'
import Image from 'next/image'
import Link from 'next/link'

// Component
function Header() {
    return (
        <Content>
            <Topbar>
                <div className="container">
                    <Image src="/logo.svg" height={50} width={288} />
                </div>
            </Topbar>
            <Navbar>
                <div className="container">
                    <Nav>
                        <Link href="/" passHref>
                            <Navlink>
                                <Image src="/menu/inicio.svg" height={15} width={15} />
                                Início
                            </Navlink>
                        </Link>
                        <Link href="/cart" passHref>
                            <Navlink>
                                Meu Carrinho
                            </Navlink>
                        </Link>
                    </Nav>
                </div>
            </Navbar>
        </Content>
    )
}

export default Header