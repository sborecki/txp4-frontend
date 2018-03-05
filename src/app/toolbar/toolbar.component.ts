import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'TXP v4 (experimental UI build)';
  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
