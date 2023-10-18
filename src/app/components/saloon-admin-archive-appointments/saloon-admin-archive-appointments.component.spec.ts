import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaloonAdminArchiveAppointmentsComponent } from './saloon-admin-archive-appointments.component';

describe('SaloonAdminArchiveAppointmentsComponent', () => {
  let component: SaloonAdminArchiveAppointmentsComponent;
  let fixture: ComponentFixture<SaloonAdminArchiveAppointmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonAdminArchiveAppointmentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaloonAdminArchiveAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
