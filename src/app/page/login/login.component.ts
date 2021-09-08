import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  
  myUsuario:Usuario;
  nombre:string;
  password:string;

  constructor(private rutas:Router) {
    this.myUsuario=new Usuario();
    this.nombre="";
    this.password="";
    
   }

  
  ingresar(){

    if (this.password == this.myUsuario.password && this.nombre == this.myUsuario.nombre)
    {
      this.rutas.navigate(['bienvenido']);
      
    }   
    else{      
      this.rutas.navigate(['error']);
    }

  }

}
