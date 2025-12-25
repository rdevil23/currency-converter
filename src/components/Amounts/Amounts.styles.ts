import { Box, IconButton, Typography, styled } from '@mui/material';

export const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    boxSizing: 'border-box',
    padding: theme.spacing(0.5)
  }
}));

export const ValueBox = styled(Box)(({ theme }) => ({
  flex: 1,
  background: theme.palette.background.paper,
  borderRadius: 12,
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: 6
}));

export const FlexBox = styled(Box)(() => ({ flex: 1 }));

export const SmallLabel = styled(Typography)(({ theme }) => ({
  display: flex,
  fontSize: 12,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: { fontSize: 9 }
}));

export const SmallTypography = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
  marginBottom: 10,
  [theme.breakpoints.down('sm')]: { fontSize: 11, marginBottom: 6 }
}));

export const RightAlignedTypography = styled(SmallTypography)(() => ({ textAlign: 'right' }));

export const ControlsRow = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  minWidth: 0,
  width: '100%'
}));

export const StyledIconButton = styled(IconButton)(() => ({ padding: 0 }));

export const NumberInput = styled('input')({
  flex: 1,
  width: '100%',
  minWidth: 0,
  textAlign: 'center',
  border: 'none',
  background: 'transparent',
  fontSize: 'clamp(12px, 4vw, 16px)',
  '&[type="number"]': {
    MozAppearance: 'textfield',
    '&::-webkit-outer-spin-button': { WebkitAppearance: 'none', margin: 0 },
    '&::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 }
  }
});

export const InfoBox = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  marginTop: 8
}));
