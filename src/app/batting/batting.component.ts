import { Component, OnInit } from '@angular/core';
import { StatService } from '../stat-service.service';
@Component({
  selector: 'app-batting',
  templateUrl: './batting.component.html',
  styleUrls: ['./batting.component.scss']
})
export class BattingComponent implements OnInit {
  public stats: any;
  public leaderboard : string[] = ['Position','name','matches','wins','loses'];
  public dataSource : any = [];
  constructor(private statsData :StatService) { }

  ngOnInit(): void {
    this.statsData.getStats().subscribe(resp =>{
      this.stats = resp;
      console.log(resp);
      this.dataSource = resp;
      console.log(this.dataSource);
    });
  }

}
