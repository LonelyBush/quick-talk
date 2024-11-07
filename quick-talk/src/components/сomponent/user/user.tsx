'use client';

import { ReactNode } from 'react';

function User({
  name,
  uid,
  children,
}: {
  name: string;
  uid: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p
        onClick={() => {
          console.log(name);
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default User;
