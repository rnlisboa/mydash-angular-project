import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, Home, Menu } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        PagesModule,
        LucideAngularModule.pick({ Home, Menu })
    ],
    providers: []
})
export class AppModule { }
