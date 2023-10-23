'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => (
  <SessionProvider>{children}</SessionProvider>
);
