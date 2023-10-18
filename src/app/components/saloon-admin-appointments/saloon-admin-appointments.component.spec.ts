import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaloonAdminAppointmentsComponent } from './saloon-admin-appointments.component';

describe('SaloonAdminAppointmentsComponent', () => {
  let component: SaloonAdminAppointmentsComponent;
  let fixture: ComponentFixture<SaloonAdminAppointmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonAdminAppointmentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaloonAdminAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
