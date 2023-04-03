import styled from 'styled-components';	
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all .3s;
  color: black;
  &.active {
    color: #1DA1F2;
    border-bottom: 2px solid #1DA1F2;
    font-weight: 700;
  }
`

export const StyledNav = styled.nav`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`