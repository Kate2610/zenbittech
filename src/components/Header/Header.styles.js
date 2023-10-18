
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 80px;
  background-color: rgba(23, 34, 52, 1);
  display: flex;
  align-items: center;
  
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  
  position: relative;
  padding: 20px;
  margin-left: auto;
`;

export const HeaderButtons = styled.ul`
  width: 360px;
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
`;

export const LoginButton = styled.button`
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 160px;
  height: 44px;
  padding: 8px 0;
  border-radius: 5px;
  border: 1px solid;
  margin-left: 10px;
  background-color: inherit;
  color: rgba(178, 159, 126, 1);
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    width: 160px;
    height: 44px;
    top: 18px;
    padding: 11px 0;
    border-radius: 5px;
    gap: 10px;
    background-color: rgba(178, 159, 126, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

export const SignupButton = styled.button`
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 160px;
  height: 44px;
  padding: 8px 0;
  border-radius: 5px;
  border: 1px solid;
  margin-left: 10px;
  background-color: inherit;
  color: rgba(178, 159, 126, 1);
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    width: 160px;
    height: 44px;
    top: 18px;
    padding: 11px 0;
    border-radius: 5px;
    gap: 10px;
    background-color: rgba(178, 159, 126, 1);
    color: rgba(255, 255, 255, 1);
  }
`;
