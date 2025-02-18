'use client';

import { ReactNode } from 'react';
import style from './user-style.module.scss';

function User({ uid, children }: { uid: string; children: ReactNode }) {
  return (
    <div
      className={style.userContainer}
      onClick={() => {
        console.log(uid);
      }}
    >
      {children}
    </div>
  );
}

export default User;
