import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: Number = 20;
  serverStatus: String = 'offline';

  constructor() {
  }

  ngOnInit() {
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
