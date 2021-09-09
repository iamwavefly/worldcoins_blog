import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    background: #eee;
    width: 100%;
    color: rgba(41, 41, 41, 1);
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
`
export default class Footer extends Component {
    render() {
        return (
            <Container>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved. World Coins Collections (WCC) Co. Ltd.  </p>
            </Container>
        )
    }
}
