import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-leaflet-bing-map',
  templateUrl: './leaflet-bing-map.component.html',
  styleUrls: ['./leaflet-bing-map.component.css']
})
export class LeafletBingMapComponent implements OnInit, AfterViewInit {

  bingMapKey:string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let mapOptions = {
      "preferCanvas": true
    }
    let map = L.map("bingMapsDiv", mapOptions);
    map.setView([35.8283, -98.5795], 4);
    let options = {
      bingMapsKey: this.bingMapKey,
      imagerySet: 'Road'
    };
    

    let bingBaseMapLayer = L.tileLayer.bing(options);
    bingBaseMapLayer.addTo(map)

  }
}
