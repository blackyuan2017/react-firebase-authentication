import { auth } from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmamilAndPassword(email, password);

export const doSignInWithEmailAnaPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
    suth.signOut();

export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);
// Password Change
export const doPasswordUpdate = (password) =>
auth.currentUser.updatePassword(password);