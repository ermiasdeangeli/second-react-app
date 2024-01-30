import Nav from 'react-bootstrap/Nav';

function MyNav() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyNav;

