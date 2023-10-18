import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateuserPage } from './activateuser.page';

describe('ActivateuserPage', () => {
  let component: ActivateuserPage;
  let fixture: ComponentFixture<ActivateuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
