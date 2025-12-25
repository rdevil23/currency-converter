import React from 'react';
import { Typography, Container, Box, ThemeProvider, styled } from '@mui/material';
import theme from './theme/theme';
import Requisites from './components/Requisites/Requisites';
import Amounts from './components/Amounts/Amounts';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: 8,
  paddingTop: '16px',
  paddingBottom: '16px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const ControlsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap'
}));

const WithdrawalMethodBtn = styled('button')<{ $selected?: boolean }>(({ theme, $selected }) => ({
  appearance: 'none',
  border: `1px solid ${$selected ? theme.palette.text.primary : 'transparent'}`,
  background: $selected ? theme.palette.text.primary : theme.palette.background.paper,
  color: $selected ? theme.palette.common.white : theme.palette.text.primary,
  borderRadius: 12,
  minWidth: 88,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: 'none',
  fontFamily: theme.typography.fontFamily,
  fontSize: 14,
  transition: 'background 0.12s, border 0.12s, color 0.12s',
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    minWidth: 70,
    height: 32
  },
  ':hover': {
    background: $selected ? theme.palette.text.primary : theme.palette.action.hover
  }
}));

function App(): React.ReactElement {
  const [method, setMethod] = React.useState<string>('banks');

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer maxWidth='md'>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant='h2'>Способ вывода</Typography>
        </Box>

        <ControlsRow>
          <WithdrawalMethodBtn
            $selected={method === 'banks'}
            onClick={() => setMethod('banks')}
            aria-pressed={method === 'banks'}
            aria-label='банки'
          >
            Банки
          </WithdrawalMethodBtn>

          <WithdrawalMethodBtn
            $selected={method === 'cash'}
            onClick={() => setMethod('cash')}
            aria-pressed={method === 'cash'}
            aria-label='наличные'
          >
            Наличные
          </WithdrawalMethodBtn>

          <WithdrawalMethodBtn
            $selected={method === 'courier'}
            onClick={() => setMethod('courier')}
            aria-pressed={method === 'courier'}
            aria-label='курьер'
          >
            Курьер
          </WithdrawalMethodBtn>
        </ControlsRow>
        <Amounts />
        <Requisites />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
