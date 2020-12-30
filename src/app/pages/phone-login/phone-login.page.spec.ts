import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneLoginPage } from './phone-login.page';

describe('PhoneLoginPage', () => {
  let component: PhoneLoginPage;
  let fixture: ComponentFixture<PhoneLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
