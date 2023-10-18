import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DentistComponent } from './dentist.component';

describe('DentistComponent', () => {
  let component: DentistComponent;
  let fixture: ComponentFixture<DentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
