import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  //mandar eventos para fora
  @Output() inc = new EventEmitter<number>();

  
  constructor() { }

  ngOnInit(): void {
  }

  btnClick(n){
    //chama o evento no componente pai
    this.inc.emit(n);
  }

}
