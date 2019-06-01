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
        <img src={logo} alt="store" className="Navbar-brand" /> 
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>This is your new navbar{' '}
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
