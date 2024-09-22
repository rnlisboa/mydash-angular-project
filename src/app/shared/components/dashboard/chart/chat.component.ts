import { Component, OnInit } from '@angular/core';
import { ChartModule } from "primeng/chart"
import { TaskService } from '../../../../core/services/api/tasks.service';
import { TaskModel } from '../../../../core/services/api/model/task.model';
@Component({
    selector: 'chart-line',
    templateUrl: './chat.component.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartLine implements OnInit {
    data: any;

    options: any;

    taskList!: TaskModel[];

    constructor(private service: TaskService) {

    }

    ngOnInit() {
        this.loadTaskList();

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    loadTaskList() {
        this.service.getAll().subscribe((tasks) => {
            this.taskList = tasks;
    
            const sortedList = this.sortTaskListByDate(this.taskList);
    
            const completedTasksByDay = this.getCompletedTasksByDay(sortedList);
    
            this.data = {
                labels: Object.keys(completedTasksByDay),
                datasets: [
                    {
                        label: 'Tarefas Concluídas',
                        data: Object.values(completedTasksByDay).map(tasks => tasks.length),
                        fill: false,
                        borderColor: '#4AD894',
                        tension: 0.4,
                    }
                ]
            };
    
        });
    }
    
    getCompletedTasksByDay(tasks: TaskModel[]): { [key: string]: TaskModel[] } {
        return tasks.reduce((acc, task) => {
            const taskDate = new Date(task.deadline);
            const formattedDate = `${String(taskDate.getDate()).padStart(2, '0')}/${String(taskDate.getMonth() + 1).padStart(2, '0')}`;
    
            if (task.finished) {
                if (!acc[formattedDate]) {
                    acc[formattedDate] = [];
                }
                acc[formattedDate].push(task);
            }
            return acc;
        }, {} as { [key: string]: TaskModel[] });
    }
    

    sortTaskListByDate(taskList: TaskModel[]): TaskModel[] {
        taskList.sort((a, b) => {
            const dateA = new Date(a.deadline).getTime();
            const dateB = new Date(b.deadline).getTime();

            return dateA - dateB;
        });
        return taskList
    }

}