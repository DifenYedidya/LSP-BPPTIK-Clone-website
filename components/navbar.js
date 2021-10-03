import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'

const LogoBpptik = () => (
  <Image
    src="/images/logoBpptik.webp" // Route of the image file
    height={59} // Desired size with correct aspect ratio
    width={250} // Desired size with correct aspect ratio
    alt="BPPTIK"
  />
)

const TopNav = () => {
    return(
        <Nav
            className="me-auto mx-5 my-5 my-lg-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                <Link href="/" passHref>
                    <Nav.Link>FAQ<span> | </span></Nav.Link>
                </Link>
                <Link href="/" passHref>
                    <Nav.Link>Kontak<span> | </span></Nav.Link>
                </Link>
                <Link href="/" passHref>
                    <Nav.Link>Lokasi<span> | </span></Nav.Link>
                </Link>
                <Link href="/" passHref>
                    <Nav.Link>Permohonan Kunjungan<span> | </span></Nav.Link>
                </Link>
        </Nav>
    )
}

const BottomNav = () => {
    return (
        <Nav
            className="blueNav me-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/profile" passHref>
                <Nav.Link>Profile</Nav.Link>
            </Link>
            <Link href="/pelatihan" passHref>
                <Nav.Link>Pelatihan</Nav.Link>
            </Link>
            <Link href="/sertifikasi" passHref>
                <Nav.Link>Sertifikasi</Nav.Link>
            </Link>
            <Link href="/jadwal" passHref>
                <Nav.Link>Jadwal</Nav.Link>
            </Link>
        </Nav>
    )
}

const SearchNav = () => {
    return (
        <Form className="d-flex">
            <FormControl className="form-control"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button className="btn-search" variant="outline-success">Search</Button>
        </Form>
    )
}

const GreenBar = () => {
    return (
        <div className="greenBar me-auto" ></div>
    )
}

function NavbarComponent() {
  return (
    <>
        <Navbar className="navbar" bg="light" expand="lg">
            <Container fluid className="container-nav">
                <Row>
                    <Col >
                        <LogoBpptik/>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <TopNav/>
                        <SearchNav/>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <GreenBar/>            
        <BottomNav/>
    </>
  )
};

export default NavbarComponent;