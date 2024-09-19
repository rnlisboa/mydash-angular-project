import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu,  } from 'lucide-angular'
import { HeaderComponent } from './components/layout/header/header.component'; 
import { SidebarPrincipal } from './components/layout/sidebar/sidebar/sidebar.component';
import { HeaderSidebar } from './components/layout/sidebar/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent ,
    SidebarPrincipal,
    HeaderSidebar
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({Menu})
  ],
  exports: [
    HeaderComponent,
    SidebarPrincipal
  ]
})
export class SharedModule {}
