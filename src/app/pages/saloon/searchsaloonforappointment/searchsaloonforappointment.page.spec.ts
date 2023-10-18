import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchsaloonforappointmentPage } from './searchsaloonforappointment.page';

describe('SearchsaloonforappointmentPage', () => {
  let component: SearchsaloonforappointmentPage;
  let fixture: ComponentFixture<SearchsaloonforappointmentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsaloonforappointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchsaloonforappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
