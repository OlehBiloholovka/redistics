export class Completable {
  toMake(plan: number, fact: number): number {
    return this.isCompleted(plan, fact) ? 0 : plan - fact;
  }
  isCompleted(plan: number, fact: number): boolean {
    return fact >= plan;
  }
}
