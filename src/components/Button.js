import styled from "styled-components"

export  const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:32px;
    background-color:var(--mainGreen);
    border: 0.05rem solid var(--mainGreen);
    padding:0.05em ;
    cursor:pointer;
    display: block;
    width: 250px;
    transition:all 0.4s ease-in-out;
    &:hover{
        background:var(--mainWhite);
        color:var(--mainGreen);
        font:color
    }
    &:focus{
        outline:none
    }
`