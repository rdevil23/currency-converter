import { CalcAmountResponse } from './types';

interface calcAmountParams {
  inAmount: number | null;
  outAmount: number | null;
  signal?: AbortSignal;
}

export async function calcAmount({ inAmount, outAmount, signal }: calcAmountParams): Promise<CalcAmountResponse> {
  const res = await fetch(import.meta.env.VITE_API_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', serial: import.meta.env.VITE_SERIAL! },
    body: JSON.stringify({ pairId: import.meta.env.VITE_PAIR_ID!, inAmount, outAmount }),
    signal
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error: ${res.status} — ${text}`);
  }

  return res.json();
}
