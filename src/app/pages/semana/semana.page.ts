import { Component, ViewChildren, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.page.html',
  styleUrls: ['./semana.page.scss'],
})
export class SemanaPage implements OnInit {

  userNameFiltrado;
  grupoFiltradoUsuarioActual;
  eventosAsignados;
  isToday: boolean;


  event = {
    title: '',
    startTime: '',
    endTime: '',
    allDay: false,
    descm: '',
    desc: '',
   };
  
   viewTitle;
  minDate = new Date().toISOString();


  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;


  @ViewChildren(CalendarComponent) myCal: CalendarComponent;

  array: any;
  constructor(
    private  loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private authService: AuthService,
    private menu: MenuController,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    this.userNameFiltrado = localStorage.getItem('userid');

    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        //   this.user.photoUrl = user.photoURL;
      }
    });
    this.getCiudad();
    this.obtenerEventos();
  }

  openCustom() {
    this.menu.enable(true, 'semana');
    this.menu.open('semana');
  }
  atras() {
    this.menu.close('semana');
  }

  user: UserInterface = {
    name: '',
    email: ''
  };

  public providerId: string = 'null';

  resetEvent() {
    this.event = {
      title: '',
      descm: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  getCiudad() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserPasajero(this.userUid, this.ciudad)
          .subscribe(userRole => {
            console.log(userRole);
            this.isPasajero = userRole.Pasajero;
            console.log("resultado pasajero=" + this.isPasajero);
            this.isAsesor = userRole.Asesor;
            console.log("resultado asesor=" + this.isAsesor);
            this.ciudad = userRole.ciudad;
            console.log("la ciudad del pasajero es: " + this.ciudad);
          })

      }

    })
  }

  obtenerEventos() {
    return new Promise((resolve, reject) => {
      this.afs.firestore
        .collection("grupos")
        .where("usuarios_grupo", "array-contains", this.userNameFiltrado) //donde dice pasajero debe decir this.userNameFiltrado
        .get()
        .then(queryGrupos => {
          const arrayGrupoUsuarioActual = [];
          queryGrupos.forEach(function (docGrupo) {
            var objGrupos = JSON.parse(JSON.stringify(docGrupo.data()));
            objGrupos.id = docGrupo.id;
            arrayGrupoUsuarioActual.push(objGrupos);
          });
          if (arrayGrupoUsuarioActual.length > 0) {
            resolve(arrayGrupoUsuarioActual);
            this.grupoFiltradoUsuarioActual = arrayGrupoUsuarioActual;
            this.eventosAsignados = this.grupoFiltradoUsuarioActual[0].itinerarioAsignado.eventos;
            console.warn(this.grupoFiltradoUsuarioActual);

          }
          else {
            this.abrirModalSinGrupoOItinerario();
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }


  async abrirModalSinGrupoOItinerario() {
    const alert = await this.alertController.create({
      header: 'lo sentimos,',
      subHeader: 'No han asignado Tours para ti',
      message: 'por favor comunicate con tu asesor.',
    });

    await alert.present();
  }

  irCiudad(){
    this.Router.navigate(["/ciudad"]);
  }


}



