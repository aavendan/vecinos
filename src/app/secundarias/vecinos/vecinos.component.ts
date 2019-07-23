import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vecinos',
  templateUrl: './vecinos.component.html',
  styleUrls: ['./vecinos.component.css']
})
export class VecinosComponent implements OnInit {

  constructor() { 
    console.log("Vecinos")

  }

  ngOnInit() {
  }

}