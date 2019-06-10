import { auth } from './firebase';

// Register
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Log in
export const doSignInWithEmailAndPassword = (email, password) => 
  auth.signInWithEmailAndPassword(email, password);
  
// Log out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

// Email Verification
export const doEmailVerification = () =>
  auth.currentUser.sendEmailVerification();

// Email Verification Status
export const doEmailVerificationStatus = () =>
  auth.currentUser.emailVerified;
