export interface IDudCalc {
  onCheckingCount: number;
  toMakeUnchecked(): number;
  mayBeCompleted(): boolean;
}
