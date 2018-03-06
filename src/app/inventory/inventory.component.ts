import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfPart } from '../perf-part';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() player: Player;
  @Output() playerChange = new EventEmitter<Player>();

  @Input() hoveredPart: PerfPart;
  @Output() hoveredPartChange = new EventEmitter<PerfPart>();

  constructor(
    private playerService: PlayerService) { }

  ngOnInit() {
  }

  equip(index: number): void {
    this.playerService.postEquip(this.player.playerlogin, index)
      .subscribe(() => this.playerService.getPlayer(this.player.playerlogin)
        .subscribe(player => this.playerChange.emit(player)));
  }

  onHover(perfPart: PerfPart): void {
    this.hoveredPartChange.emit(perfPart);
  }

}
