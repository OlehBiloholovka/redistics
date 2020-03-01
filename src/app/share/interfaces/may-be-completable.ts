import { Completable } from './completable';

export interface MayBeCompletable extends Completable {
  onCheckingCount: number;
  toMakeUnchecked(): number;
  mayBeCompleted(): boolean;
}
