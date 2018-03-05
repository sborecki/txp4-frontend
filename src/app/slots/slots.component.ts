import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

  getTooltip(perfPart): string {
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
