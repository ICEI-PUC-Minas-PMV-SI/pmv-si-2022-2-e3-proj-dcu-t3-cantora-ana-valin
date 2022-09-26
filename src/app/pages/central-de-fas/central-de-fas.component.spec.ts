/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CentralDeFasComponent } from './central-de-fas.component';

describe('CentralDeFasComponent', () => {
  let component: CentralDeFasComponent;
  let fixture: ComponentFixture<CentralDeFasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralDeFasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralDeFasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
