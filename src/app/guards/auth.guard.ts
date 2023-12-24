import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const token = localStorage.getItem('jwtToken');
    debugger
 if(token){
  return true;
 }else{
  const router = inject(Router);
  return router.navigate(['login']);
 }
};
