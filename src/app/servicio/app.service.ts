import { Injectable } from '@angular/core';
import { App } from '../shared/app'; 
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
 
@Injectable({
  providedIn: 'root'
})
export class AppService {
	
  appsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  listarDatos() {
    	this.appsRef = this.db.list('clientes');
    return this.appsRef;
  } 
  
}
