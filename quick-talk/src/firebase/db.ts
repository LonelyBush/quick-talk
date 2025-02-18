import {
  arrayUnion,
  collection,
  doc,
  Firestore,
  getDocs,
  getDoc,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { UsersChatList } from '@/types/firestore';

const getCurrentUserChats = async (
  db: Firestore,
  currentUser: User,
): Promise<string[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const usersChatList = doc(db, `usersContacts`, currentUser.uid);
      const chatsWithCurrUser = await getDoc(usersChatList);
      if (chatsWithCurrUser.exists()) {
        const getChats = chatsWithCurrUser
          .data()
          .contacts.map((contact: UsersChatList) => contact.receiverId);
        resolve(getChats);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getAllUsers = async (db: Firestore, currentUser: User) => {
  return new Promise(async (resolve, reject) => {
    try {
      const usersQuery = query(
        collection(db, 'users'),
        where('uid', '!=', currentUser.uid),
      );
      const users = await getDocs(usersQuery);
      const chats = await getCurrentUserChats(db, currentUser);

      if (chats) {
        resolve(
          users.docs
            .map((elem) => elem.data())
            .filter((elem) => !chats.includes(elem.uid)),
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

const addUserToContactList = async (
  db: Firestore,
  currentUser: User | null,
  userId: string,
) => {
  const chatsRef = collection(db, 'chats');
  const usersChatList = collection(db, 'usersContacts');
  try {
    const newChatRef = doc(chatsRef);
    await setDoc(newChatRef, {
      createdAt: serverTimestamp(),
      messages: [],
    });
    await updateDoc(doc(usersChatList, userId), {
      contacts: arrayUnion({
        chatId: newChatRef.id,
        receiverId: currentUser?.uid,
        updatedAt: new Date(),
      }),
    });
    await updateDoc(doc(usersChatList, currentUser?.uid), {
      contacts: arrayUnion({
        chatId: newChatRef.id,
        receiverId: userId,
        updatedAt: new Date(),
      }),
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllUsers, addUserToContactList };
