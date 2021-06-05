import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  //data
  public username:string ="John smith";
  public age:number = 29;
  public email:string ="john.smith@gmail.com";
  public isMarried:boolean = false;
  public imageURl="./assets/img/smiley.jpg";

  // style binding
  public color = { RED :'red' , ORANGE:'orange', BLUE:'blue', GREY:'grey', BLACK:'black'};
  public size = { TEN:'10', TWENTY:'20', THIRTY:'30'};
  public enabled:boolean = false;

  //object type
  public account:Account = { id:10001, name:"Jonh Doe", balance:87634, age:30};
  constructor() { }

  ngOnInit(): void {
  }

  public user:string="";
  public userText:string="";

  public onUpdate($event:any) {
    // console.log($event.target.value);
    this.username = $event.target.value;
  }


  public onChange(){
    this.enabled = !this.enabled;
    console.log("Event is triggred !");
  }
}

interface Account {
  id:number;
  name:string;
  balance:number;
  age:number;
}
