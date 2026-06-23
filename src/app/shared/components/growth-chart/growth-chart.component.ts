import { Component } from '@angular/core';

interface ChartBar {
  month: string;
  value: number;
  height: string;
}

@Component({
  selector: 'fv-growth-chart',
  templateUrl: './growth-chart.component.html',
  styleUrl: './growth-chart.component.scss'
})
export class GrowthChartComponent {
  private readonly rawValues = [38, 52, 71, 96, 130, 177, 241, 327, 445, 604, 820, 1115];
  private readonly months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  private readonly maxVal = Math.max(...this.rawValues);

  bars: ChartBar[] = this.rawValues.map((v, i) => ({
    month:  this.months[i],
    value:  v,
    height: ((v / this.maxVal) * 160) + 'px'
  }));
}
