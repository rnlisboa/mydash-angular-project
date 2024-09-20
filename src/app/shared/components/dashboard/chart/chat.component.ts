import { Component, OnInit } from '@angular/core';
import { ChartModule } from "primeng/chart"
@Component({
    selector: 'chart-line',
    templateUrl: './chat.component.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartLine implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.data = {
            labels: this.getLast15Days(),
            datasets: [
                {
                    label: 'Quark clinic',
                    data: this.getRandomNumbersArray(),
                    fill: false,
                    borderColor: '#4AD894',
                    tension: 0.4,
                    
                }
            ]
        };

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

    getLast15Days() {
        const dates = [];
        const today = new Date();

        for (let i = 0; i < 15; i++) {
            const currentDate = new Date();
            currentDate.setDate(today.getDate() - i);

            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');

            dates.push(`${day}/${month}`);
        }

        return dates.reverse();
    }

    getRandomNumbersArray() {
        const numbers = [];

        for (let i = 0; i < 15; i++) {
            const randomNum = Math.floor(Math.random() * 7);
            numbers.push(randomNum);
        }

        return numbers;
    }
}