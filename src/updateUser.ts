import { FirestoreService } from './firestoreService';

export const changeUserName = (
  userId: string,
  userName: string,
  email: string,
  key: string,
  projectId: string
) => {
  const firestore = new FirestoreService(email, key, projectId);
  firestore.updateData('users', userId, { displayName: userName });
};

export const changeSecondName = (
  userId: string,
  secondName: string,
  email: string,
  key: string,
  projectId: string
) => {
  const firestore = new FirestoreService(email, key, projectId);
  firestore.updateData('users', userId, { secondName: secondName });
};
