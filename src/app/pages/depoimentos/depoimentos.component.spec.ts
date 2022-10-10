/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepoimentosComponent } from './depoimentos.component';

describe('DepoimentosComponent', () => {
  let component: DepoimentosComponent;
  let fixture: ComponentFixture<DepoimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
