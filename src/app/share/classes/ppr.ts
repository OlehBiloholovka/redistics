export class Ppr {
  PPR: string;
  categoryRDMS: string;
  isPPR(): boolean {
    return this.categoryRDMS === 'Спец. розница (GSM)' || this.havePartnerContract();
  }
  havePartnerContract(): boolean {
    return this.PPR === 'Да';
  }
}
