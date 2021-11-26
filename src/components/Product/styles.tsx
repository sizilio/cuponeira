import styled from 'styled-components'

export const Box = styled.div`
    display: flex;

    @media (min-width: 992px) {
        max-width: 33.333333%;
        flex: 0 0 33.333333%
    }

    @media (max-width: 425px) {
        max-width: 100%;
        flex: 0 0 100%
    }
`

export const BoxContent = styled.div`
    width: 100%;
    box-shadow: 0 .3rem 1rem rgba(0,0,0,.15);
    border-radius: 15px;
    margin: 0 10px 25px;
    padding: 15px;
    text-align: center;
    font-size: 1.2rem;
`

export const BoxImg = styled.div`
    display: block;
    width: 100%;
    padding: 20px 0;
    height: 140px;

    img {
        max-height: 100px;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    height: 105px;
    align-items: center;
    justify-content: center;
`

export const BoxPrice = styled.div`
    display: block;
    padding: 20px 0;
    font-weight: bold;
    font-size: 1.3rem;
`

export const BoxLink = styled.a`
    background-image: linear-gradient(to right, #24C92B , #099F0F);
    color: #fff;
    border-radius: 20px;
    padding: 8px 0;
    font-size: 1rem;
    font-weight: bold;
    text-transform: lowercase;
    display: block;

    &:hover {
        background-image: linear-gradient(to right, #099F0F , #24C92B);
    }
`