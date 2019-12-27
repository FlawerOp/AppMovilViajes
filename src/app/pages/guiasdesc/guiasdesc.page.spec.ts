import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuiasdescPage } from './guiasdesc.page';

describe('GuiasdescPage', () => {
  let component: GuiasdescPage;
  let fixture: ComponentFixture<GuiasdescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasdescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuiasdescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
