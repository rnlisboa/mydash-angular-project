import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.componente.html',
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string, active: boolean }> = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.breadcrumbs)
        this.breadcrumbs = this.buildBreadcrumb(this.route.root);
      });
  }

  buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string, active: boolean }> = []): Array<{ label: string, url: string, active: boolean }> {
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}/${path}`;
    const newBreadcrumbs = [...breadcrumbs];

    if (label) {
      newBreadcrumbs.push({ label, url: nextUrl, active: false });
    }

    if (route.firstChild) {
      return this.buildBreadcrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    newBreadcrumbs[newBreadcrumbs.length - 1].active = true;
    return newBreadcrumbs;
  }
}
