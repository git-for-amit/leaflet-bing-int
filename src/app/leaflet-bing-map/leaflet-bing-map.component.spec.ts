import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletBingMapComponent } from './leaflet-bing-map.component';

describe('LeafletBingMapComponent', () => {
  let component: LeafletBingMapComponent;
  let fixture: ComponentFixture<LeafletBingMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletBingMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletBingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
