import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
//name propriété interne (private), la valeur est défini ici
  name : string = "propriété interne";
//prop1 : propriété d'entrée = la valeur pourra être envoyée
//par le parent  
  @Input() prop1 : string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
    console.log(this.prop1);
  }

}
