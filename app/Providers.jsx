'use client';

import { store } from '@/store';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

const Providers = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering until the theme is mounted
  }

  return (
    <Provider store={store}>

    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
    </Provider>
  );
};

export default Providers;
