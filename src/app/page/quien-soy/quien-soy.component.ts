import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.rutas.navigate(['bienvenido'])
  }
}
