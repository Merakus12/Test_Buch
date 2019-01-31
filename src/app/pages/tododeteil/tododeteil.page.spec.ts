import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododeteilPage } from './tododeteil.page';

describe('TododeteilPage', () => {
  let component: TododeteilPage;
  let fixture: ComponentFixture<TododeteilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododeteilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododeteilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
