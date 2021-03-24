import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstname') name: string;
  @Input() lastname: string;
  @Input() age: number;

  clients: Client[];
  
  constructor() { 
    this.clients = [
      {id:1, name:"Bob", age:30},
      {id:2, name:"Carla", age:23},
      {id:3, name:"Jefferson", age:24},
      {id:4, name:"Beth", age:50},
    ];
  }

  ngOnInit(): void {
  }

}
