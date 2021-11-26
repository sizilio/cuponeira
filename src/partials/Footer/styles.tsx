import styled from 'styled-components'

export const Content = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
	    'social';
    gap: 0;
    height: 100%;
`
export const Social = styled.div`
    grid-area: social;
    background-image: linear-gradient(#FF0000 , #F91E96);
    padding: 40px 0;
    text-align: center;
`

export const LinkSocial = styled.a`
    padding: 0 15px;
`