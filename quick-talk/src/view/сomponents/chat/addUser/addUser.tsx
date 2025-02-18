'use client';

import style from './addUser.module.scss';
import Button from '@/view/ui/button/button';
import { addUserToContactsAction } from '@/actions/server-actions';

function AddUser({ uid, username }: { uid: string; username: string }) {
  return (
    <div className={style.addUserContainer}>
      <div className={style.profilePicMock}></div>
      <div className={style.cardDescrip}>
        <h3>{username}</h3>
        <Button
          btnType="button"
          onClick={() => {
            addUserToContactsAction(uid);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
