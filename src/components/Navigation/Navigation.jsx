import AuthNav from 'components/AuthNav/AuthNav';
import { StyledNav, StyledNavLink } from 'components/Navigation/Navigation.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  return (
    <>
      <StyledNav>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        {isLoggedIn && !isRefreshing ? <UserMenu /> : <AuthNav />}
      </StyledNav>
      <Outlet/>
    </>
  );
}