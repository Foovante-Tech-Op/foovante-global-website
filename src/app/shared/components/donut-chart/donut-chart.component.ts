import { Component, OnInit } from '@angular/core';

interface DonutSlice {
  value: number;
  color: string;
  dashArray: string;
  dashOffset: number;
}

@Component({
    selector: 'fv-donut-chart',
    imports: [],
    templateUrl: './donut-chart.component.html',
    styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent implements OnInit {
  slices: DonutSlice[] = [];
  private readonly radius = 56;
  private readonly circumference = 2 * Math.PI * this.radius;

  private rawSlices = [
    { v: 31, c: 'var(--green)' },
    { v: 47, c: 'var(--gold)' },
    { v: 14, c: '#5C7259' },
    { v: 8,  c: 'var(--sage)' }
  ];

  ngOnInit(): void {
    let cumulative = 0;
    this.slices = this.rawSlices.map(s => {
      const len    = (s.v / 100) * this.circumference;
      const offset = -cumulative;
      cumulative  += len;
      return {
        value:       s.v,
        color:       s.c,
        dashArray:   `${len} ${this.circumference}`,
        dashOffset:  offset
      };
    });
  }
}
