import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Dashboard } from './dashboard.component';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dashboard],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct task counts', () => {
    component.todoTask = 5;
    component.doingTask = 2;
    component.doneTask = 10;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const todoCount = compiled.querySelector('.n-todo')?.textContent;
    const doingCount = compiled.querySelectorAll('.n-todo')[1]?.textContent;
    const doneCount = compiled.querySelectorAll('.n-todo')[2]?.textContent;

    expect(todoCount?.trim()).toBe('5');
    expect(doingCount?.trim()).toContain('2');
    expect(doneCount?.trim()).toBe('10');
  });

  it('should display the alert if there are late tasks', () => {
    component.lateTask = 1;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const lateTaskMessage = compiled.querySelector('.n-todo + span')?.textContent;

    expect(lateTaskMessage?.trim()).toBe('1 tarefa em atraso!');
  });
});
