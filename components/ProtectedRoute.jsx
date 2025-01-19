// components/ProtectedRoute.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push('/register');
    }
  }, [isLoggedIn, router]);

  // If logged in, render the protected content
  if (!isLoggedIn) {
    return null; // You can show a loader or something while redirecting
  }

  return children;
};

export default ProtectedRoute;
