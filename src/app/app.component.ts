import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Clientes';
  
  isValid: boolean = true;
	check(valid: boolean){
		this.isValid = valid;
	}
  
}
