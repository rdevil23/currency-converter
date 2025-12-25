import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';

const HeaderTypography = styled(Typography)(() => ({
  flexGrow: 1
}));

const Header = (): React.ReactElement => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <HeaderTypography variant='h6'>My Application</HeaderTypography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
