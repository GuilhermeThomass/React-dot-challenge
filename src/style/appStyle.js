import styled from "styled-components";

export const Section = styled.div`
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: hsl(226, 43%, 10%);
`
export const Dot = styled.span`
    display: block;
    height: 20px;
    width: 20px;
    background-color:hsl(246, 80%, 60%);
    border-radius: 50%;

    position: absolute;
    top: 100px;
    left: 100px;
`

export const Button = styled.button`
    background-color: transparent;
    color: white;
    font-size: large;
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid white;
    &:hover{
        cursor: pointer;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-top: 16px;
`