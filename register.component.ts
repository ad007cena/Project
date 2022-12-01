import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
repeatPass:string ='none';
  isAccountCreated: boolean=false;
  displayMsg: string='';
   constructor(private authService:AuthService){
    
   }
  ngOnInit(): void {
    
  }

  registerform = new FormGroup({
     firstname :new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
     lastname :new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
     email :new FormControl('',[Validators.required,Validators.email]),
     mobile :new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9].*")]),
     gender :new FormControl('',[Validators.required]),
     pwd :new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
     repwd :new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)])

  });

  registerSubmitted(){
    if(this.Password.value == this.RePassword.value){
      console.log("Submitted");
      this.repeatPass='none'

      
    
    

    this.authService.registerUser([
      this.registerform.value.firstname!,
      this.registerform.value.lastname!,
      this.registerform.value.email!,
      this.registerform.value.mobile!,
      this.registerform.value.gender!,
      this.registerform.value.pwd!
    ]).
    subscribe((data)=>{
     if(data == "Success"){
      this.displayMsg= 'Account Created Successfully';
      this.isAccountCreated= true;
     }
     else if(data == 'AlreadyExist'){
      this.displayMsg='Account Already Exist.Try another Email.';
      this.isAccountCreated= false;
     }
     else{
      this.displayMsg='Something went wrong';
      this.isAccountCreated=false;
     }
    });
  }else{
      this.repeatPass = 'inline'
    }
    
  }

  get FirstName(): FormControl{
  
    return this.registerform.get("firstname") as FormControl;
  }

  get LastName(): FormControl{
  
    return this.registerform.get("lastname") as FormControl;
  }

  get Email(): FormControl{
  
    return this.registerform.get("email") as FormControl;
  }

  get Mobile(): FormControl{
  
    return this.registerform.get("mobile") as FormControl;
  }

  get Gender(): FormControl{
  
    return this.registerform.get("gender") as FormControl;
  }

  get Password(): FormControl{
  
    return this.registerform.get("pwd") as FormControl;
  }
  get RePassword(): FormControl{
  
    return this.registerform.get("repwd") as FormControl;
  }
}
