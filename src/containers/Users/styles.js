import styled from "styled-components"
import Background from "../../assets/galaxya.jpg"

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img ` 
    margin-top: 30px;

`

export const ContainerItems = styled.div`
    background: linear-gradient( 157.44deg,
    rgba(255,255,255,0.6) 0.84%,
    rgba(255,255,255,0.6) 0.85%,
    rgba(255,255,255,0.15) 100%);

    backdrop-filter: blur(5px);
    
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 140px);
    
`

export const H1 = styled.h1 `
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    opacity: 0.8;
    margin-bottom: 50px;
`

export const Button = styled.button`
    width: 342px;
    height: 60px;
    margin-top: 80px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFF;
    font-weight: bold;
    color: #FFF;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }

    
    img{
        transform: rotateY(180deg);
    }
`

export const User = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    background: rgba(255,255,255, 0.25);
    box-shadow: 0px, 4px, 4px rgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height: 60px;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
    margin-top: 20px;

    p{
        font-weight: bold;
        color: #FFF;
    }

    button{
        background:  transparent;
        border: none;
        cursor: pointer;
    }

`