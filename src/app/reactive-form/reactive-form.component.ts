import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public exampleForm: FormGroup;
  public submitted:boolean = false;

  constructor(private formBuilder:FormBuilder) { 

    this.exampleForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(15)]],
      lastName: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      userName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      city: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      state: ['',Validators.required],
      zipcode: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      agree: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  
  }

  public hasError(field:any){
    return ( this.exampleForm.get(field)?.invalid && this.exampleForm.get(field)?.touched &&
    this.exampleForm.get(field)?.errors);
  }

  public submitForm(form:any){
    if(form.valid){
      this.submitted = true;
      console.log(this.exampleForm.value);
      
    } else {
      this.validateForm(form);
    }
  }

  private validateForm(form:any) {
    Object.keys(form.controls).forEach(field=>{
     const control =  form.get(field);
     if(control instanceof FormControl){
      control.markAsTouched({ onlySelf : true});
     } else{
      this.validateForm(control);
     }     
    });
  }

  // get methods
  get f(){ return this.exampleForm.controls;}
  

}
