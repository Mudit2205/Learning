import { StatService } from '../stat-service.service';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public stats: any;
  public leaderboard : string[] = ['name','innings','total_runs','average','strike_rate'];
  public dataSource : any = [];
  constructor(private statsData :StatService) {
   }
  ngOnInit(): void {
    this.statsData.getStats().subscribe(resp =>{
      this.stats = resp;
      this.dataSource = resp;
    });
  }
  


}
