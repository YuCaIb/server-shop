import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShop } from './main-shop';

describe('MainShop', () => {
  let component: MainShop;
  let fixture: ComponentFixture<MainShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainShop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
