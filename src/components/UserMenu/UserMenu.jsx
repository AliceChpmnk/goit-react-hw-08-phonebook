import React from 'react';
import { UserMenuContainer } from './UserMenu.styled';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DA1F2',
      darker: '#053e85',
    },
  },
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUseremail);

  const handleLogOut = () => dispatch(authOperations.logOut());
  
  return (
    <UserMenuContainer>
      <p>{email}</p>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color='primary' onClick={handleLogOut}>Logout</Button>
          </ThemeProvider>
    </UserMenuContainer>
  )
}
