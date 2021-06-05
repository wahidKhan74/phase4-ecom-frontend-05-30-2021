import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user:User = {firstName:'',lastName:'',city:'',userName:'',state:'',zipcode:0 , agree:false};
  public submitted : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:any){
    // console.log(this.user);
    console.log(form);
    if(form.valid){
      this.submitted = true;
    } else {
      this.validateForm(form);
    }
    
  }

  private validateForm(form:any) {
    Object.keys(form.controls).forEach(field=>{
     const control =  form.controls[field];
     control.markAsTouched({ onlySelft : true});
    });
  }

  public hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

}

interface User {
  firstName:string;
  lastName:string;
  userName :string;
  city:string;
  state:string;
  zipcode:number;
  agree:boolean;
}