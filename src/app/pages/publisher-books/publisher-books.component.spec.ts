import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherBooksComponent } from './publisher-books.component';

describe('PublisherBooksComponent', () => {
  let component: PublisherBooksComponent;
  let fixture: ComponentFixture<PublisherBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
