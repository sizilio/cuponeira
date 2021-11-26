import { Content, Social, LinkSocial } from './styles'
import Image from 'next/image'
import Link from 'next/link'

// Component
export default function Footer () {
    return (
        <Content>
            <Social>
                <div className="container">
                    <Link href="#facebook" passHref>
                        <LinkSocial>
                            <Image src="/social/face.svg" height={40} width={40} />
                        </LinkSocial>
                    </Link>
                    <Link href="#instagram" passHref>
                        <LinkSocial>
                            <Image src="/social/insta.svg" height={40} width={40} />
                        </LinkSocial>
                    </Link>
                    <Link href="#ftwitter" passHref>
                        <LinkSocial>
                            <Image src="/social/twitter.svg" height={40} width={40} />
                        </LinkSocial>
                    </Link>
                    <Link href="#youtube" passHref>
                        <LinkSocial>
                            <Image src="/social/youtube.svg" height={40} width={40} />
                        </LinkSocial>
                    </Link>
                </div>
            </Social>
        </Content>
    )
}