import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})

export class DescripcionPage implements OnInit {
  array: any;
  titulo;
  url;
  duracion;
  descripcionCorta;
  descripcionLarga;
  incluye;
  no_incluye;
  recomendaciones;
  constructor(
    private active: ActivatedRoute,
  ) { }

  //FIXME el boton para abrir el menu no abre 
  ngOnInit() {
    //this.metodo();
    this.titulo = this.active.snapshot.paramMap.get("titulo");
    this.url = this.active.snapshot.paramMap.get("url");
    this.duracion = this.active.snapshot.paramMap.get("duracion");
    this.descripcionCorta=this.active.snapshot.paramMap.get("descripcionCorta");
    this.descripcionLarga = this.active.snapshot.paramMap.get("descripcionLarga");
    this.incluye = this.active.snapshot.paramMap.get("incluye");
    this.no_incluye = this.active.snapshot.paramMap.get("no_incluye");
    this.recomendaciones = this.active.snapshot.paramMap.get("recomendaciones");
  }
}
