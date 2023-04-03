import { StyledNavLink } from 'components/Navigation/Navigation.styled';
import React from 'react';

export default function AuthNav() {
    return (
      <>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </>
    )
}