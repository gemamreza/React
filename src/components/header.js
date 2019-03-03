
//Function Components
import React from 'react';
import './support/css/cssform.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import {Link} from 'react-router-dom';
  import { connect } from 'react-redux';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color='light' light expand="md">
          <Link to='/'><NavbarBrand fontColor='white'>{this.props.nama}</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/login' style={{textDecoration:'none'}}><NavLink>Login</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/register" style={{textDecoration:'none'}}><NavLink>Register</NavLink></Link>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'black'}}>{this.props.kata} Words</NavLink>
              </NavItem>
              <NavItem>
                <Link to='./latihan' style={{textDecoration:'none'}}><NavLink>Latihan</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Direction
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to='./latihann'><NavLink>Latihan</NavLink></Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='./deletevocal'><NavLink>DelVoc</NavLink></Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='./product'><NavLink>Product</NavLink></Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  // nama adalah variabel yg kita bikin sendiri
  return {nama : state.user.username,
          email : state.user.email,
          buah : state.product.namaProduct,
          kata : state.jumlah.count}
  // return {user : state.user.username} maka yg di atas cukup {this.props.user}
}

export default connect(mapStateToProps)(Example)