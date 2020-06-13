/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemMgtComponent } from './itemMgt.component';

describe('ItemMgtComponent', () => {
  let component: ItemMgtComponent;
  let fixture: ComponentFixture<ItemMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
