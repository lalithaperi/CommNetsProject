import { Injectable, ViewChild, ElementRef, NgModule,NgZone, OnDestroy } from '@angular/core';
import { resolve } from 'dns';
import { IMqttMessage, MqttService, IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { Subscription,of } from "rxjs";
import { Topic } from './model/topic';


@Injectable({
  providedIn: 'root'
})

export class MqttServiceService implements OnDestroy{

  private subscription: Subscription = new Subscription;
  public value: any;
  topicname: any;
  public topic: any;
  xdata: any;
  ydata: any;
  list1: any = {};
  masterList: any=[];
  boolean=false;
  loading=false;
  @ViewChild('msglog', { static: true })
  msglog!: ElementRef;
  topics:Topic[]=[];

  constructor(private _mqttService: MqttService) { }

  getTopic(topicname: string) {
  
    var self =this;
    self.masterList=[];
    //self.topics=[]
    //self.masterList=[];

     
      return this._mqttService.observe(topicname)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}
  subscribeLive(topicname: string) {
    this.subscription = this._mqttService.observe(topicname).subscribe((message: IMqttMessage) => {
      console.log("hi")
      var data = message.payload.toString().split(',')
      this.xdata = (data[0].split(":"))[1];
      this.ydata = (data[1].split(":"))[1];
    });
    return this.xdata, this.ydata
  }
  sendmsg(topicname: string, msg: string) {
    // use unsafe publish for non-ssl websockets
    this._mqttService.unsafePublish(topicname, msg, { qos: 1, retain: true })
    msg = ''
  }

  // onConnected(): void {
  //   this.logMsg('Connected to broker!');
  //   this.isConnected = true;
  // }

  logMsg(message: any) {
    this.msglog.nativeElement.innerHTML += '<br><hr>' + message;
  }

  clear() {
    this.msglog.nativeElement.innerHTML = '';
  }


}



function subscribeNewTopic() {
  throw new Error("Function not implemented.");
}


