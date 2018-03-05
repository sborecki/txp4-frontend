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
  @Output() playerChange = new EventEmitter();

  constructor(
    private playerService: PlayerService) { }

  ngOnInit() {
  }

  equip(index: number): void {
    this.playerService.postEquip(this.player.playerlogin, index)
      .subscribe(() => this.playerService.getPlayer(this.player.playerlogin)
        .subscribe(player => this.playerChange.emit(player)));
  }

  getShortTooltip(perfPart: PerfPart): string {
    var out: string = `${perfPart.vendor} (Tier ${perfPart.tier})`;
    if (perfPart.maxspeed !== 0)
      out += `\nMaximum speed: ${perfPart.maxspeed}%`;
    if (perfPart.accel !== 0)
      out += `\nAcceleration: ${perfPart.accel}%`;
    if (perfPart.steering !== 0)
      out += `\nSteering: ${perfPart.steering}%`;
    if (perfPart.breaking !== 0)
      out += `\nBreaking: ${perfPart.breaking}%`;
    if (perfPart.turbostrength !== 0)
      out += `\nTurbo strength: ${perfPart.turbostrength}%`;
    if (perfPart.grip !== 0)
      out += `\nGrip: ${perfPart.grip}%`;
    if (perfPart.grav !== 0)
      out += `\nVehicle mass: ${perfPart.grav}%`;
    if (perfPart.perfpartrarity !== 0)
      out += `\nExtra rarity of part drops: ${perfPart.perfpartrarity}%`;
    return out;
  }
}
