'use server';

import { addUserToContactList, getAllUsers } from '@/firebase/db';
import { getAuthenticatedAppForUser } from '@/firebase/serverApp';
import { getFirestore } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

async function fetchFilteredUser(query: string) {
  try {
    const { firebaseServerApp, currentUser } =
      await getAuthenticatedAppForUser();

    if (!currentUser) {
      return;
    }
    const users = (await getAllUsers(
      getFirestore(firebaseServerApp),
      currentUser,
    )) as { uid: string; nickname: string; email: string }[];
    if (query.length === 0) {
      return [];
    }

    return users.filter((elem) =>
      elem.nickname.toLowerCase().startsWith(query),
    );
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAllUsers() {
  try {
    const { firebaseServerApp, currentUser } =
      await getAuthenticatedAppForUser();

    if (!currentUser) {
      return;
    }
    const users = (await getAllUsers(
      getFirestore(firebaseServerApp),
      currentUser,
    )) as { uid: string; nickname: string; email: string }[];

    return users;
  } catch (err) {
    console.error(err);
  }
}

async function addUserToContactsAction(userId: string) {
  const { firebaseServerApp, currentUser } = await getAuthenticatedAppForUser();
  await addUserToContactList(
    getFirestore(firebaseServerApp),
    currentUser,
    userId,
  );
  revalidatePath('/add');
}

export { addUserToContactsAction, fetchFilteredUser };
