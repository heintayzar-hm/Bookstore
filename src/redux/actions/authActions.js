import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// The signUp action
const signUp = (uid) => ({
  type: 'SIGNUP',
  uid,
});

// The login action
const login = (uid) => ({
  type: 'LOGIN',
  uid,
});

// The logout action
const logout = () => ({
  type: 'LOGOUT',
});

// Sign in with email and password
const signUpWithEmailAndPassword = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      // ..
    });
};

// Sign in with email and password
const signInWithEmailAndPassword = (email, password) => {
  console.log(email, password);
  return (dispatch) => firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(login(user.uid));
    });
};

// Sign out
const signOut = () => {
  console.log('Sigining Out');
  return (dispatch) => firebase.auth().signOut()
    .then(() => {
      dispatch(logout());
    });
};

export {
  signOut,
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
};
