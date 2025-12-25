export interface CalcAmountRequest {
  pairId: number;
  inAmount: number | null;
  outAmount: number | null;
}

export interface CalcAmountResponse {
  price: number[];
  inAmount: number;
  outAmount: number;
}
