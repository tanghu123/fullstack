/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserMgtComponent } from './userMgt.component';

describe('UserMgtComponent', () => {
  let component: UserMgtComponent;
  let fixture: ComponentFixture<UserMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
