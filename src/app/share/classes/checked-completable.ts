import {Completable} from './completable';

export class CheckedCompletable extends Completable {
  sendCount: number;
  checkedCount: number;
  plan: number;
  toMake(): number {
    return super.toMake(this.plan, this.checkedCount);
  }
  isCompleted(): boolean {
    return super.isCompleted(this.plan, this.checkedCount);
  }
}
