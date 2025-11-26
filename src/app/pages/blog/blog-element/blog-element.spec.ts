import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogElement } from './blog-element';

describe('BlogElement', () => {
  let component: BlogElement;
  let fixture: ComponentFixture<BlogElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
