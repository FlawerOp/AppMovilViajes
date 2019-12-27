import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.page.html',
  styleUrls: ['./guias.page.scss'],
})
export class GuiasPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
}
atras() {
    this.menu.close('custom');
}



}
