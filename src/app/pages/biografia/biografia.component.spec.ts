/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BiografiaComponent } from './biografia.component';

describe('BiografiaComponent', () => {
  let component: BiografiaComponent;
  let fixture: ComponentFixture<BiografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
