import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderButtons,
  LoginButton,
  SignupButton,
} from './Header.styles.js';
import { login, logout } from '../../redux/authAction.js';

function Header() {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  const isLoginPage = location.pathname === '/login';
  const isUserDashboardPage = location.pathname === '/dashboard';

  // Conditionally render the entire Header component for all routes except the user dashboard page
  if (isUserDashboardPage) {
    return null; // Hide the entire Header on the user dashboard page
  }

  return (
    <HeaderWrapper>
      <HeaderNav>
        {isLoginPage ? null : (
          <HeaderButtons>
            <li>
              <Link to="/login">
                <LoginButton onClick={handleLogin}>
                  {isAuthenticated ? 'Log Out' : 'Log In'}
                </LoginButton>
              </Link>
            </li>
            {isAuthenticated ? null : (
              <li>
                <Link to="/signup">
                  <SignupButton>Sign Up</SignupButton>
                </Link>
              </li>
            )}
          </HeaderButtons>
        )}
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
