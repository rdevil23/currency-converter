import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Box, FormControlLabel, styled } from '@mui/material';
import InputField from '../Input/InputField';

export const Section = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

export const Card = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 12,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1.5)
}));

export const RequisitesInput = styled(InputField)(() => ({
  padding: 0,
  margin: 0,
  '& .MuiFilledInput-root': {
    backgroundColor: 'transparent',

    '&:before': {
      display: 'none'
    },
    '&:after': {
      display: 'none'
    },
    '&:hover:before': {
      display: 'none'
    }
  },
  '& .MuiFilledInput-input': {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    '&[type="number"]': {
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      }
    }
  }
}));

export const OptionsRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1)
  }
}));

export const HeaderRow = styled(OptionsRow)(() => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center'
}));

export const CheckboxLabel = styled(FormControlLabel)(({ theme }) => ({
  fontSize: 12,
  marginBottom: 6,
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  marginLeft: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: 10
  },
  '.MuiFormControlLabel-label': {
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    }
  }
}));

export const CheckboxWrapper = styled(Box)<{ checked: boolean }>(({ checked }) => ({
  backgroundColor: checked ? '#000' : 'transparent',
  width: 16,
  height: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px 24px 0 10px'
}));

export const InputWrapper = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const IconWrapper = styled(DriveFileRenameOutlineIcon)(() => ({
  paddingRight: 10
}));
