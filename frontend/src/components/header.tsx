import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
    return (
        <Container>
                <Navbar bg="dark" variant="dark" className="border rounded px-3">
                <Navbar.Brand href="/kezdooldal">Tablet Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/tabletek">Tablet Lista</Nav.Link>
                    <Nav.Link href="/tabletadd">Új tablet hozzáadása</Nav.Link>
                    <Nav.Link href="/tabletdel">Tablet törlése</Nav.Link>
                </Nav>
        </Navbar>
            </Container>
    )
}
