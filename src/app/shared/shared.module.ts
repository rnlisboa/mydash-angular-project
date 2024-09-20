import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDashboardIcon, LayoutList, LucideAngularModule, Menu, Search,  } from 'lucide-angular'
import { HeaderLayout } from './components/layout/header-layout/header-layout.component'; 
import { SidebarPrincipal } from './components/layout/sidebar/sidebar/sidebar.component';
import { HeaderSidebar } from './components/layout/sidebar/header/header.component';
import { TopPageComponent } from './components/layout/top-page/top-page.component';

@NgModule({
  declarations: [
    HeaderLayout ,
    SidebarPrincipal,
    HeaderSidebar,
    TopPageComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({Menu, LayoutList, LayoutDashboardIcon, Search})
  ],
  exports: [
    HeaderLayout,
    SidebarPrincipal,
    TopPageComponent,
  ]
})
export class SharedModule {}
