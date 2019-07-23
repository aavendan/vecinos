import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, Marker } from 'leaflet';

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.css']
})
export class BarriosComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 11,
    center: latLng(-2.192084, -79.879981)
  };
  
  constructor() { }

  ngOnInit() {
    
  }

}