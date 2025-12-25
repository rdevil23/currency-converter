import React from 'react';

import { RemoveCircle as RemoveCircleIcon, AddCircle as AddCircleIcon } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { useDebounce } from '../../hooks/useDebounce';
import { calcAmount } from '../../api/api';
import { CalcAmountResponse } from '../../api/types';

import {
  ControlsRow,
  FlexBox,
  InfoBox,
  NumberInput,
  RightAlignedTypography,
  Row,
  SmallLabel,
  SmallTypography,
  StyledIconButton,
  ValueBox
} from './Amounts.styles';

const GIVE_MIN = 10000;
const GIVE_MAX = 70000000;
const GIVE_STEP = 100;
const RECEIVE_STEP = 0.000001;
const RECEIVE_MAX = 1000000000;

export const Amounts: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [price, setPrice] = React.useState<number | null>(null);
  const [giveAmount, setGiveAmount] = React.useState<number>(GIVE_MIN);
  const [receiveAmount, setReceiveAmount] = React.useState<number>(0);

  const debouncedGive = useDebounce(giveAmount, 300);
  const debouncedReceive = useDebounce(receiveAmount, 300);

  const lastActive = React.useRef<'give' | 'receive'>('give');
  const lastRequest = React.useRef({ give: GIVE_MIN, receive: 0 });

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    calcAmount({ inAmount: giveAmount, outAmount: null, signal: controller.signal })
      .then((data: CalcAmountResponse) => {
        setPrice(Number(data.price[0]));
        setReceiveAmount(Number(data.outAmount));
        lastRequest.current = { give: Number(data.inAmount), receive: Number(data.outAmount) };
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err);
          setError('Ошибка загрузки данных');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  React.useEffect(() => {
    const controller = new AbortController();

    const params =
      lastActive.current === 'give'
        ? { inAmount: debouncedGive, outAmount: null }
        : { inAmount: null, outAmount: debouncedReceive };

    if (
      (lastActive.current === 'give' && debouncedGive === lastRequest.current.give) ||
      (lastActive.current === 'receive' && debouncedReceive === lastRequest.current.receive)
    ) {
      return;
    }

    setLoading(true);
    setError(null);

    calcAmount({ ...params, signal: controller.signal })
      .then((data: CalcAmountResponse) => {
        setPrice(Number(data.price[0]));
        setGiveAmount(Number(data.inAmount));
        setReceiveAmount(Number(data.outAmount));
        lastRequest.current = { give: Number(data.inAmount), receive: Number(data.outAmount) };
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err);
          setError('Ошибка расчёта. Попробуйте позже.');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [debouncedGive, debouncedReceive]);

  const handleGiveChange = (value: number) => {
    if (value > GIVE_MAX) return;
    if (value < GIVE_MIN) return;
    lastActive.current = 'give';
    setGiveAmount(value);
  };

  const handleReceiveChange = (value: number) => {
    if (value < 0) return;
    if (value > RECEIVE_MAX) return;
    lastActive.current = 'receive';
    setReceiveAmount(value);
  };

  return (
    <Box>
      <Typography variant='h2' gutterBottom>
        Объемы
      </Typography>

      <Row>
        <FlexBox>
          <SmallTypography>Отдаете(лот 1000)</SmallTypography>
          <ValueBox>
            <SmallLabel>Etherium, ETH</SmallLabel>
            <ControlsRow>
              <StyledIconButton
                size='small'
                onClick={() => handleGiveChange(giveAmount - GIVE_STEP)}
                disabled={giveAmount <= GIVE_MIN}
              >
                <RemoveCircleIcon />
              </StyledIconButton>
              <NumberInput
                type='number'
                id='give'
                value={giveAmount}
                min={GIVE_MIN}
                max={GIVE_MAX}
                step={GIVE_STEP}
                onChange={(e) => handleGiveChange(Number(e.target.value))}
              />
              <StyledIconButton size='small' onClick={() => handleGiveChange(giveAmount + GIVE_STEP)}>
                <AddCircleIcon />
              </StyledIconButton>
            </ControlsRow>
          </ValueBox>
        </FlexBox>

        <FlexBox>
          <RightAlignedTypography>Получаете(лот 1000)</RightAlignedTypography>
          <ValueBox>
            <SmallLabel>Рубль, RUR</SmallLabel>
            <ControlsRow>
              <StyledIconButton size='small' onClick={() => handleReceiveChange(receiveAmount - RECEIVE_STEP)}>
                <RemoveCircleIcon />
              </StyledIconButton>
              <NumberInput
                type='number'
                id='receive'
                value={receiveAmount}
                step={RECEIVE_STEP}
                onChange={(e) => handleReceiveChange(Number(e.target.value))}
              />
              <StyledIconButton size='small' onClick={() => handleReceiveChange(receiveAmount + RECEIVE_STEP)}>
                <AddCircleIcon />
              </StyledIconButton>
            </ControlsRow>
          </ValueBox>
        </FlexBox>
      </Row>

      <InfoBox>
        {loading && <Typography variant='body2'>Расчёт…</Typography>}
        {error && <Typography color='error'>{error}</Typography>}
      </InfoBox>
    </Box>
  );
};

export default Amounts;
