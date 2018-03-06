import { Component, OnInit, Input } from '@angular/core';
import { PerfPart } from '../perf-part';
import { Player } from '../player';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() player: Player;
  @Input() hoveredPart: PerfPart;

  constructor() { }

  ngOnInit() {
  }

  public getCurrent(): PerfPart {
    if (!this.hoveredPart)
      return null;
    switch (this.hoveredPart.perfparttype) {
      case 'engine':
        return this.player.slotengine;
      case 'transmission':
        return this.player.slottransmission;
      case 'tires':
        return this.player.slottires;
      default:
        return null;
    }
  }


}
