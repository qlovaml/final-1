import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const isLoggedIn = this.dataService.isLoggedIn();
    const role = this.dataService.getRole();

    if (state.url.startsWith('/admin/login') && isLoggedIn && role === 'admin') {
      return this.router.parseUrl('/admin/home');
    }

    if (isLoggedIn && role === 'admin') {
      return true;
    }

    if (!state.url.startsWith('/admin/login')) {
      return this.router.parseUrl('/admin/login');
    }

    return true;
  }
}