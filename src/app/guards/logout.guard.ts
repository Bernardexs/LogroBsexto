import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let token = localStorage.getItem('token');
  if (!token) {
    // If there's no token, the user is not logged in, so redirect to login page
    router.navigateByUrl('/home');
    return true;
  } else {
    // If the user is logged in, allow access to the route
    return true;
  }};
