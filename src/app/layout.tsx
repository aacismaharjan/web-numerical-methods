import Navbar from '@/components/Navbar';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-2 px-2 sm:px-2 ">{children}</div>
    </div>
  );
}
