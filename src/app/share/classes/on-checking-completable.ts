import {Completable} from './completable';
import {CheckedCompletable} from './checked-completable';

export class OnCheckingCompletable extends Completable implements CheckedCompletable {
  checkedCount: number;
  plan: number;
  sendCount: number;
  onCheckingCount: number;

  isCompleted: () => boolean;
  toMake: () => number;
  toMakeUnchecked(): number {
    return super.toMake(this.plan, this.onCheckingCount);
  }
  mayBeCompleted(): boolean {
    return super.isCompleted(this.plan, this.onCheckingCount);
  }
}
