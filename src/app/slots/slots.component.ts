import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PerfPart } from '../perf-part';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  @Input() player: Player;

  @Input() hoveredPart: PerfPart;
  @Output() hoveredPartChange = new EventEmitter<PerfPart>();

  constructor() { }

  ngOnInit() {
  }

  onHover(perfPart: PerfPart): void {
    this.hoveredPartChange.emit(perfPart);
  }

}
