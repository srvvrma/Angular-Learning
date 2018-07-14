import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewserver = true;
  serverName: String = '';
  serverStatus = 'Server Not created';
  buttonClicked: Boolean = false;
  servers = ['server_1', 'server_2'];

  constructor() {
  }

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerCreate(event: Event) {
    this.buttonClicked = true;
    // console.log(event);
    this.serverStatus = 'Server Created. Name of the server is ' + this.serverName;
  }
}
