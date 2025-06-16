// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const rawUserData = localStorage.getItem('user-details');

  // If no user data, redirect to login
  if (!rawUserData) {
    console.warn('Access denied: No user found. Redirecting to login.');
    router.navigate(['/login']);
    return false;
  }

  let user: any;
  try {
    user = JSON.parse(rawUserData);
  } catch (error) {
    console.error('Error parsing user data:', error);
    router.navigate(['/login']);
    return false;
  }

  const expectedRole = route.data?.['role']?.toLowerCase();
  console.log(user)
  const userRole = user?.role?.toLowerCase();

  console.log(`Guard check → Expected: ${expectedRole}, Actual: ${userRole}`);

  // If roles mismatch
  if (expectedRole && userRole !== expectedRole) {
    console.warn('Access denied: Role mismatch.');
    router.navigate(['/unauthorized']); // Optional fallback page
    return false;
  }

  // Passed all checks
  return true;
};
