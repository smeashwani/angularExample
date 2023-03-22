import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulartutorialComponent } from './angulartutorial.component';

describe('AngulartutorialComponent', () => {
  let component: AngulartutorialComponent;
  let fixture: ComponentFixture<AngulartutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulartutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulartutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
