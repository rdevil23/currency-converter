import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(() => ({}));

type Props = TextFieldProps;

const InputField: React.FC<Props> = (props) => {
  const { variant = 'filled', size = 'small', fullWidth = true, ...rest } = props;
  return <StyledTextField variant={variant} size={size} fullWidth={fullWidth} {...rest} />;
};

export default InputField;
