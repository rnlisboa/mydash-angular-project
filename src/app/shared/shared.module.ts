import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutDashboardIcon, LayoutList, LucideAngularModule, Menu, Search,  } from 'lucide-angular'
import { HeaderLayout } from './components/layout/header-layout/header-layout.component'; 
import { SidebarPrincipal } from './components/layout/sidebar/sidebar/sidebar.component';
import { HeaderSidebar } from './components/layout/sidebar/header/header.component';
import { TopPageComponent } from './components/layout/top-page/top-page.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.componente';
import { RouterModule } from '@angular/router';
import { ButtonSelectorComponent } from './components/layout/button/button.component';
import { DatatableComponent } from './components/tasks/datatable/datatable.component';
import { DialogModule } from 'primeng/dialog';
import { ModalComponent } from './components/layout/modal/modal.component';


@NgModule({
  declarations: [
    HeaderLayout ,
    SidebarPrincipal,
    HeaderSidebar,
    TopPageComponent,
    BreadcrumbComponent,
    ButtonSelectorComponent,
    DatatableComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    LucideAngularModule.pick({Menu, LayoutList, LayoutDashboardIcon, Search})
  ],
  exports: [
    HeaderLayout,
    SidebarPrincipal,
    TopPageComponent,
    BreadcrumbComponent,
    ButtonSelectorComponent,
    DatatableComponent,
    ModalComponent,
  ]
})
export class SharedModule {}
