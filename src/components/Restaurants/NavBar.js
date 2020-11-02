import React, { Component } from 'react'
import styled from "styled-components"
import {ButtonContainer} from "../Button"
import logo2 from "../assets/img/logo-red.jpg"
export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5 d-flex  mb-2 justify-content-between">
                <img src={logo2} alt="Logo of the store" className="navbar-brand  logo"/>
                <form class="form-inline">
                    <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <ButtonContainer className="text-sans"> Buscar </ButtonContainer>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav `
    background:var(--mainWhite);
    border: 0.05rem solid black;
    padding:0.05em ;
    box-shadow: 0.5px 0.5px 0.5px 0.5px grey;
    m
`