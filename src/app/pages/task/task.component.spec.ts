import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Task } from './task.component';

describe('Task', () => {
  let component: Task;
  let fixture: ComponentFixture<Task>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task ],
      schemas: [NO_ERRORS_SCHEMA] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a top-page component', () => {
    const topPageElement = fixture.debugElement.query(By.css('top-page'));
    expect(topPageElement).toBeTruthy();
  });

  it('should have a header-layout component', () => {
    const headerElement = fixture.debugElement.query(By.css('header-layout'));
    expect(headerElement).toBeTruthy();
  });

  it('should render four button-selectors', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button-selector'));
    expect(buttons.length).toBe(4);
  });

  it('should render the app-datatable component', () => {
    const datatableElement = fixture.debugElement.query(By.css('app-datatable'));
    expect(datatableElement).toBeTruthy();
  });

  it('should render a modal component', () => {
    const modalElement = fixture.debugElement.query(By.css('modal'));
    expect(modalElement).toBeTruthy();
  });
});
