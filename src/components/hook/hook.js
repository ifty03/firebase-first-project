import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const handelSignInGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(result);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
    console.log("hello");
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  const handelSignOut = () => {
    signOut(auth).then(() => {});
  };
  return { user, handelSignInGoogle, error, handelSignOut };
};
export default useFirebase;
