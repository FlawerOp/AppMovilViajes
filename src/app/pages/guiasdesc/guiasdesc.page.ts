import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-guiasdesc',
  templateUrl: './guiasdesc.page.html',
  styleUrls: ['./guiasdesc.page.scss'],
})
export class GuiasdescPage implements OnInit {
  array: any;
  nombre;
  telefono;
  foto;
  constructor(
    private active: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.nombre = this.active.snapshot.paramMap.get("nombre");
    this.telefono = this.active.snapshot.paramMap.get("telefono");
    this.foto = this.active.snapshot.paramMap.get("foto");
  }

}
