import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactoRapidoPage } from './contacto-rapido.page';

describe('ContactoRapidoPage', () => {
  let component: ContactoRapidoPage;
  let fixture: ComponentFixture<ContactoRapidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoRapidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoRapidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
