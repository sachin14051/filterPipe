import { Component, OnInit } from '@angular/core';
import { iPlayer } from '../../model/model';
import { PlayerService } from '../../service/player.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

players !: Array<iPlayer>;
searchValue !:string
  constructor(private _players: PlayerService) { }

  ngOnInit(): void {
    this.players = this._players.getAllPlayers()
  }

}
