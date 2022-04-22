import { Injectable, ViewChild, ElementRef, OnInit,AfterViewInit,Component,Input, OnDestroy,ChangeDetectionStrategy, Output, ɵɵqueryRefresh } from '@angular/core';
import { table } from 'console';
import { IMqttMessage, MqttService, IMqttServiceOptions, MqttModule } from "ngx-mqtt";

import { Subscription, Observable } from "rxjs";

import { Topic } from '../model/topic';
import { MqttServiceService } from '../mqtt-service.service';



@Component({
  selector: 'app-configuration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})

export class ConfigurationComponent implements OnInit,OnDestroy {
  private subscription: Subscription=new Subscription;
  displayedColumns = ['id','topic','value'];

  ngOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  ngDropdown = this.ngOptions[1];
  public message!: String;
  topicname: any;
  msg: any;  
  id=0
  list1: any = {};
  @Input() node:any; 
  @Output() dataSource:any=[];
  data=[];
   isTrue=false;
  loading = false;
  topics:Topic[]=[];
  constructor(public mqtt:MqttServiceService) { 
  } 
   
  ngOnInit() {
    this.data=[]
  

     
  }
  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }
  editTopic(topic:string,element:string){
    //This is for publishing value into a topic
    this.mqtt.sendmsg('inc_node/'+this.node+'/config/set/'+topic,element)
    this.topics=this.dataSource
    //this.dataSource=[];
   
   }
   func(){   
    
      this.id=0
      if(this.node!=undefined||this.node==''){
        this.loading=true;
       //This is to subscribe for the mqtt Topic based on node number 
        this.subscription=this.mqtt.getTopic('inc_node/'+this.node+'/config/get/#').subscribe((data: IMqttMessage) => {
      this.loading=false    
      //The payload and topic are taken and passed into JSON to populate to a table 
        let payload = data.payload.toString()
        let topic = data.topic
        this.id=this.id+1
        this.list1={
          id: this.id,
          topic:topic.substring(topic.lastIndexOf('/') + 1),
          value:payload
        }
        //If the list1 is not empty then we push JSON to an array
        if(this.list1){
        this.topics.push(this.list1)
        }
        if(this.topics){
          this.isTrue=true;
            }
     
      this.dataSource=this.topics
      
    });
  
      if(this.isTrue==true){
        this.loading=false;
        this.dataSource=this.topics
        console.log(this.node +"-" +this.topics)
        console.log(this.dataSource) 
        this.topics=[]; 
        this.dataSource=[]; 
       
        }
      }   
    } 


   
  }     
    
    
     
   
   
 

