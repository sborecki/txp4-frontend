import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit() {
      this.getPlayer();
  }

  getPlayer(): void {
    const playerLogin :string = this.route.snapshot.paramMap.get('playerLogin');
    if(playerLogin != null) {
      this.playerService.getPlayer(playerLogin)
          .subscribe(player => this.player = player);
    }
  }

}
