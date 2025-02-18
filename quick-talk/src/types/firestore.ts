export type User = {
  email: string;
  nickname: string;
  uid: string;
};

export type UsersChatList = {
  chatId: string;
  receiverId: string;
  updatedAd: Date;
};

export type UsersContacts = {
  contacts: UsersChatList;
};

export type ChatRoom = {
  chatId: string;
  receiverId: string;
  updatedAd: Date;
  user: User;
};
