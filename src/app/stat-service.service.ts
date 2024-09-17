import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private url='https://www.sofascore.com/api/v1/tournament/38566/season/65961/standings/total';
  constructor(private stat:HttpClient) { }

  getStats(){
    return this.stat.get(this.url)
  }
}
