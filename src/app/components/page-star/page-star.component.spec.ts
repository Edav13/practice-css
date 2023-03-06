import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStarComponent } from './page-star.component';

describe('PageStarComponent', () => {
  let component: PageStarComponent;
  let fixture: ComponentFixture<PageStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
