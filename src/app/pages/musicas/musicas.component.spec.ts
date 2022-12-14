/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicasComponent } from './musicas.component';

describe('MusicasComponent', () => {
  let component: MusicasComponent;
  let fixture: ComponentFixture<MusicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
