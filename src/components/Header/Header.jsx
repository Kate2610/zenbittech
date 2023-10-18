import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderButtons,
  LoginButton,
  SignupButton,
} from './Header.styles.js';

function Header() {
  const location = useLocation();

  // Функция для проверки, нужно ли скрыть кнопки на странице /login
  const shouldHideButtons = () => {
    return location.pathname === '/login';
  };

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderButtons>
          {shouldHideButtons() ? ( 
            null
          ) : (
            <>
              <li>
                <Link to="/login">
                  <LoginButton>Log In</LoginButton>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <SignupButton>Sign up</SignupButton>
                </Link>
              </li>
            </>
          )}
        </HeaderButtons>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
