import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }

  quienSoy(){
    this.rutas.navigate(['quienSoy']);
  }

}
