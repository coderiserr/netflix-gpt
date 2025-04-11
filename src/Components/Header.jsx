import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser ,remove} from "../utils/userSlice"
import { useEffect } from "react";
import { photo_Url } from "../utils/constant";
const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
 const user=useSelector((store)=> store.user)
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Redirect to the home page after successful sign-out
    } catch (error) {
    
      navigate("/error"); // Redirect to an error page if sign-out fails
    }
  };
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
         navigate("/browser")
      } else {
         
        dispatch(remove())
        navigate("/")
      }
    });
  },[])
  

  return (
    <div className="flex items-center justify-between absolute top-0 left-0 w-full px-2 py-6 bg-gradient-to-b from-black z-50">
      <img
        className="w-44"
        src={photo_Url}
        alt="Logo"
      />
       
     { user && <button
        onClick={handleSignOut}
        className="shadow focus:ring-2 ring-black font-bold text-gray-700 border-2 bg-red-500 border-none rounded py-3 px-4 mr-6"
      >
        Sign Out
      </button>
}
    </div>
  );
};

export default Header;
