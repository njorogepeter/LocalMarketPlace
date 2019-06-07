import React, { useContext } from 'react';
import { CounterContext } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../logo.svg';

const Navbar = () => {
  const { currentUser } = useContext(CounterContext);
  return (
    <div>
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
    <Link to="/">
        <img src={logo} alt="store" className="Navbar-brand" /> 
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-3">
          <Link to="/signup">Sign Up</Link> 
          </li>
          <li className="nav-item ml-3">
          <Link to="/login">Login</Link>
          </li>
      </ul>

      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <i className="fas fa-cart-plus" />
          checkout
        </ButtonContainer>
      </Link>
    </NavWrapper>
   
      

    </div>
  );
};
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainwhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
