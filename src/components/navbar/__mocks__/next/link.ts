// __mocks__/next/link.ts
import React from 'react';

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return <a href={href}>{children}</a>;
};

export default Link;