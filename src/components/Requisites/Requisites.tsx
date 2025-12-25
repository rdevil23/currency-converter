import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import {
  Card,
  CheckboxLabel,
  CheckboxWrapper,
  HeaderRow,
  IconWrapper,
  InputWrapper,
  OptionsRow,
  RequisitesInput,
  Section
} from './Requisites.styles';

const Requisites: React.FC = () => {
  const [type, setType] = React.useState<'card' | 'contract'>('card');
  const [number, setNumber] = React.useState<string>('');
  const [isChecked, setIsChecked] = React.useState(true);
  const [ownerName, setOwnerName] = React.useState<string>('');

  return (
    <Section>
      <HeaderRow>
        <Typography variant='h2' gutterBottom>
          Реквизиты
        </Typography>
        <CheckboxLabel
          control={
            <CheckboxWrapper checked={isChecked}>
              <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            </CheckboxWrapper>
          }
          labelPlacement='start'
          label='Сохранить реквизиты'
          color='theme.palette.text.secondary'
        />
      </HeaderRow>
      <Card>
        <OptionsRow>
          <RadioGroup
            row
            value={type}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setType(e.target.value as 'card' | 'contract');
              setNumber('');
            }}
          >
            <FormControlLabel value='card' control={<Radio />} label='Номер карты' />
            <FormControlLabel value='contract' control={<Radio />} label='Номер договора' />
          </RadioGroup>
          <InputWrapper>
            <RequisitesInput
              type='number'
              label={type === 'card' ? 'Номер карты' : 'Номер договора'}
              placeholder={type === 'card' ? 'Номер карты' : 'Номер договора'}
              inputMode='numeric'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
            />
            <IconWrapper />
          </InputWrapper>
        </OptionsRow>
      </Card>

      <Card>
        <OptionsRow>
          <InputWrapper>
            <RequisitesInput
              label='ФИО владельца'
              placeholder='ФИО владельца'
              value={ownerName}
              onChange={(e) => {
                const value = e.target.value.replace(/[0-9]/g, '');
                setOwnerName(value);
              }}
            />
            <IconWrapper />
          </InputWrapper>
        </OptionsRow>
      </Card>
      <Card>
        <OptionsRow>
          <InputWrapper>
            <RequisitesInput label='Адрес' placeholder='Адрес' />
            <IconWrapper />
          </InputWrapper>
        </OptionsRow>
      </Card>
    </Section>
  );
};

export default Requisites;
