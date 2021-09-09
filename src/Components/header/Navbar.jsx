import React, { Component } from 'react'
import styled from "styled-components"
import Logo from './Logo'
import Menu from './Menu'

const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    height: 60px;
    padding: 0 80px;
    box-shadow: 0 5px 10px rgba(10,0,0,.05);
    background: #fff;
    display: grid;
    grid-template-columns: 10rem 18rem;
    justify-content: space-between;
    z-index: 9;
`
export default class Navbar extends Component {
    render() {
        return (
            <Container>
                <Logo />
                <Menu />
            </Container>
        )
    }
}
