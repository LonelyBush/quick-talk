'use client';

import { useContext, useEffect, useState } from 'react';
import style from './contacts.module.scss';
import { AuthContext } from '@/context/authContext';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/firebase-config/client-app';
import User from '../user/user';
import { ChatRoom, UsersChatList } from '@/types/firestore';

function Contacts() {
  const { user } = useContext(AuthContext);
  const [contacts, setContacts] = useState<ChatRoom[]>([]);

  useEffect(() => {
    if (user?.uid) {
      const unSub = onSnapshot(
        doc(db, 'usersContacts', user?.uid),
        async (response) => {
          const getContacts = response.data()?.contacts;
          const map = getContacts.map(async (items: UsersChatList) => {
            const usersRef = doc(db, 'users', items.receiverId);
            const userData = await getDoc(usersRef);
            return { ...items, user: userData.data() };
          });
          const resolvedContactsData: ChatRoom[] = await Promise.all(map);
          setContacts(resolvedContactsData);
        },
      );
      return () => {
        unSub();
      };
    }
  }, [user?.uid]);

  return (
    <div className={style.contactsSection}>
      My contacts:
      {contacts.map((contact) => {
        return (
          <User key={`contact-${contact.user.uid}`} uid={contact.user.uid}>
            {contact.user.nickname}
          </User>
        );
      })}
    </div>
  );
}

export default Contacts;
