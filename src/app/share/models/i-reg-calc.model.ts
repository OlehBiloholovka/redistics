export interface IRegCalc {
  plan: number;
  sendCount: number;
  checkedCount: number;
  toMake(): number;
  isCompleted(): boolean;
}
