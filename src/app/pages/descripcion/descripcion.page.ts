import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



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
  descripcion
  incluye;
  no_incluye;
  recomendaciones;
  guia;
  constructor(
    private active: ActivatedRoute,
    private router:Router
  ) { }

  //FIXME el boton para abrir el menu no abre 
  ngOnInit() {
    //this.metodo();
    this.titulo = this.active.snapshot.paramMap.get("titulo");
    this.url = this.active.snapshot.paramMap.get("url");
    this.duracion = this.active.snapshot.paramMap.get("duracion");
    this.descripcion=this.active.snapshot.paramMap.get("descripcion");
    this.incluye = this.active.snapshot.paramMap.get("incluye");
    this.no_incluye = this.active.snapshot.paramMap.get("no_incluye");
    this.recomendaciones = this.active.snapshot.paramMap.get("recomendaciones");
  }

  irAlGuia(){
    this.router.navigate(["/guias/"]);
  }
}
