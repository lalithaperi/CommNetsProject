import { MqttServiceService } from 'src/app/mqtt-service.service'
import { Component, OnInit } from '@angular/core';
import * as app from '../app.component.js';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  topicname:any;
  msg:any;
  xdata:any;
  ydata:any;
  message:any
  constructor(private mqtt:MqttServiceService) { }

  ngOnInit(): void {
    
    
  }
  subscribeNewTopic() {
    this.mqtt.subscribeLive(this.topicname);
  
    
  }
  sendmsg()
  {
    this.mqtt.sendmsg(this.topicname,this.msg)
    
  }
  clear(){
    this.mqtt.clear
  }
}
