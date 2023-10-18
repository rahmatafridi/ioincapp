import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaloonAdminArchivePage } from './saloon-admin-archive.page';

describe('SaloonAdminArchivePage', () => {
  let component: SaloonAdminArchivePage;
  let fixture: ComponentFixture<SaloonAdminArchivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonAdminArchivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaloonAdminArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
