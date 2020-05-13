export class ProgressData {
  dataLabels?: string[];
  data: number[][] | number[];
  switchedData: number[][] | number[];
  displayedData: number[][] | number[];
  switchedDisplayedData: number[][] | number[];
  totalLabel?: string;

  private static isNumber = (a: number | number[]): a is number => typeof a === 'number';

  private static getTotal(data: number[] | number[][]): number {
    if (data.some(ProgressData.isNumber)) {
      return (data as number[]).reduce((pV, cV) => pV + cV);
    }
  }

  private static getAverage(data: number[] | number[][]): number {
    if (data.some(ProgressData.isNumber)) {
      return Math.round(ProgressData.getTotal(data as number[]) / data.length);
    }
  }

  getData(isSwitched?: boolean): number[] | number[][] {
    return isSwitched ? this.switchedData : this.data;
  }

  getChartData(isSwitched?: boolean): ChartData[] {
    return this.dataLabels.map((label, index) => {
      return {
        name: label,
        data: this.getData(isSwitched)[index] as number[]
      };
    });
  }

  getDisplayedData(isSwitched?: boolean): number[] | number[][] {
    return isSwitched ? this.switchedDisplayedData : this.displayedData;
  }

  getTotalData(isSwitched?: boolean): number {
    return ProgressData.getTotal(isSwitched ? this.switchedData : this.data);
  }

  getAverageData(isSwitched?: boolean): number {
    return ProgressData.getAverage(isSwitched ? this.switchedData : this.data);
  }

  getTotalDisplayedData(isSwitched?: boolean): number {
    return ProgressData.getTotal(isSwitched ? this.switchedDisplayedData : this.displayedData);
  }

  getAverageDisplayedData(isSwitched?: boolean): number {
    return ProgressData.getAverage(isSwitched ? this.switchedDisplayedData : this.displayedData);
  }
}

export class ChartData {
  name: string;
  data: number[];
}
