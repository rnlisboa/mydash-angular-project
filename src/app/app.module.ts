import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, Home, Menu } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        PagesModule,
        LucideAngularModule.pick({ Home, Menu }),
        HttpClientModule
    ],
    providers: [
      
    ]
})
export class AppModule { }
