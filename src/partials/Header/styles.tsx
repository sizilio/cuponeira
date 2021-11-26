import styled from 'styled-components'

export const Content = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
	    'logo'
	    'header';
    gap: 0;
    height: 100%;
`
export const Topbar = styled.div`
    grid-area: logo;
    background-image: linear-gradient(to right, #FF0000 , #F91E96);
    padding: 40px 0;
`

export const Navbar = styled.div`
    grid-area: header;
    box-shadow: 0 .3rem 1rem rgba(0,0,0,.15);
    padding: 20px 0;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Navlink = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: lowercase;
    font-weight: bold;
    color: #000000B3;
    padding: 2px 0 0;

    &:hover {
        text-decoration: none
    }

    img {
        padding-right: 5px !important;
    }
`