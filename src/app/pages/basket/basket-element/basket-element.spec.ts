import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketElement } from './basket-element';

describe('BasketElement', () => {
  let component: BasketElement;
  let fixture: ComponentFixture<BasketElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
