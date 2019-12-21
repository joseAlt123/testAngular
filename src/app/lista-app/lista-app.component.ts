import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../shared/app.service'; 
import { App } from './../shared/app';  

@Component({
  selector: 'app-lista-app',
  templateUrl: './lista-app.component.html',
  styleUrls: ['./lista-app.component.css']
})
export class ListaAppComponent implements OnInit {
	
	Dato: App[]; 
	
	ocultarDatos: boolean = false;

  constructor(public leerApp: AppService) { }

  ngOnInit() {
	  
	  this.dataState();
	  let s = this.leerApp.listarDatos(); 
	  
	  s.snapshotChanges().subscribe(data => { 
      this.Dato = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Dato.push(a as App);
      })
    })
  }

  dataState() {     
    this.leerApp.listarDatos().valueChanges().subscribe(data => {
        this.ocultarDatos = true;
    })
  }
  
}
