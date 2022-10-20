import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Link } from 'react-router-dom';
import { FaBan, FaCheck } from "react-icons/fa";


import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
    

    return (
        <>
            <Navbar bg="dark" variant="dark">

                <Container>

                    <Navbar.Brand as={Link} to="/"> Logo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/minting">민팅페이지</Nav.Link>
                        <Nav.Link as={Link} to="/detail">상세페이지</Nav.Link>
                        <Nav.Link as={Link} to="/mypage">마이페이지</Nav.Link>
                    </Nav>
                    <div className="userInfo"><a style={{ color: "white" }}>{props.account}</a></div>
                    <h1>\</h1>

                    {props.loaded ? <button
                        className="metaConnect"
                        onClick={props.disconnectWallet}
                    >
                        disconnect
                    </button> : <button
                        className="metaConnect"
                        onClick={props.connectWallet}
                    >
                        connect to MetaMask
                    </button>
                    }
                    {props.loaded ? <FaCheck size="24" color="green" /> : <FaBan size="24" color="red" />
                    }
                </Container>
            </Navbar>

        </>


    );
}

export default Header;