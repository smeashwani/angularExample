import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderandstructureComponent } from './folderandstructure.component';

describe('FolderandstructureComponent', () => {
  let component: FolderandstructureComponent;
  let fixture: ComponentFixture<FolderandstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderandstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderandstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
