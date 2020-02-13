import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
/*
    let coords = new google.maps.LatLng(4.7726686,-74.0440468);

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 4.7726686, lng: -74.0440468},
      zoom: 8
    });

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    });
  */  
    
  }
}
