export interface Completable {
  sendCount: number;
  checkedCount: number;
  inWorkCount: number;
  plan: number;

  toMake(): number;
  isCompleted(): boolean;
}
