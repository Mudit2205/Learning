import { Component, OnInit } from '@angular/core';
import { StatService } from '../stat-service.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

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
