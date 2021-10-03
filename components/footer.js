import React from "react";
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'

const Copyright = () => {
    return (
        <div className="copyright " >
            <p>Copyright Ⓒ 2021 BPPTIK. All Rights Reversed<span> Created by: Difen Yedidya Sjamsu </span></p>
        </div>
    )
}

function FooterComponent(){
    return(
        <>
            <footer className="footer">
                <p>Info lainnya</p>
                <div className='greenText'>
                    <a>Lokasi Hiburan</a>
                    <a>Statistik Kominfo</a>
                </div>
            </footer>
            <Copyright/>
        </>
    )
}

export default FooterComponent;