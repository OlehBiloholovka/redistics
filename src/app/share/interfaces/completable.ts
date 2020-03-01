export interface Completable {
  sendCount: number;
  checkedCount: number;
  plan: number;

  toMake(): number;
  isCompleted(): boolean;
}
