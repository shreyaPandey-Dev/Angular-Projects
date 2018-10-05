import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Register } from '../register';
import { HttpClient } from '@angular/common/http';
import * as user from 'assets/user.json';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  allowLogin=false;
  loginEmail='';
  loginPassword='';
  loginStatus='';
  model: any;
  loginModel :any;
  loginForm :Document;
  loggedIn=false;

  name='';
  rpassword='';
  age='';
  id='';
  email='';
  allowRegister=false;
  registerStatus='';
  regModel : any;


  /* constructor (private httpService: HttpClient) { 

  } */
  constructor(private router: Router) { }
  Onlogin(){
    this.loginStatus="User logged in with username  "+this.loginEmail +'  and password   '+this.loginPassword ;
    this.model=new Login(this.loginEmail,this.loginPassword);
    this.loginModel=JSON.stringify(this.model);


        for(let i in user){
          console.log('before');
          console.log(user[i].email);
          console.log(user[i].rpassword);
                if(this.loginEmail==user[i].email 
                  && this.loginPassword==user[i].rpassword){
                  /*  alert('Login Success! <a href="content">Success</a>' ); */
                  
                  this.loggedIn=true;
                
                } 
                else/* (this.loginEmail!=user[i].email && 
                  this.loginPassword!=user[i].rpassword) */
                  {
                    this.loggedIn=false;
                  alert('Invalid credentials!');
          
                }
                i=i+1;
                console.log('elemnt no. : '+i);    
          }
          
          if(this.loggedIn){
            this.router.navigate(['/content']);
          } 
  }

  Onregister(){
    this.registerStatus="Successfully registerd with " +this.name ;
    this.model=new Register(this.name,this.rpassword,this.age,this.id,this.email);
    this.regModel=JSON.stringify(this.model);
  }

 
  user: string [];

  ngOnInit () {
 
  }
 /*  changePage(){
    this.ro.navigate(['../content']);
  } */
}