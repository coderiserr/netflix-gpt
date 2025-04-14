import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, remove } from "../utils/userSlice";
import { useEffect } from "react";
import { photo_Url, SUPPORTED_LANG } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";

import { addlangData } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSeach);
 
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Redirect to the home page after successful sign-out
    } catch (error) {
      navigate("/error"); // Redirect to an error page if sign-out fails
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(remove());
        navigate("/");
      }
    });
  }, []);

  const handleSearchGpt=()=>{
    dispatch(toggleGptSearch())
  }
  const handlelangOption=(e)=>{
    dispatch(addlangData(e.target.value))
  }

  

  return (
    <div className="flex items-center justify-between absolute top-0 left-0 w-full px-2 py-6 bg-gradient-to-b from-black z-50">
      <img className="w-44" src={photo_Url} alt="Logo" />

      {user && (
        <>
        
          <div>
          { showGptSearch &&(
            <select onChange={handlelangOption} className="shadow focus:ring-2 hover:ring-whitle font-bold text-white border-2 bg-black border-none rounded py-3 px-4 mr-6">
            {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
             
            
            </select>
          )}
             
           
           
            <button className="shadow focus:ring-2 hover:ring-whitle font-bold text-gray-700 border-2 bg-yellow-600 border-none rounded py-3 px-4 mr-6"
            onClick={handleSearchGpt}>{showGptSearch ? "HomePage":"GPTSearch"}</button>
            <button
              onClick={handleSignOut}
              className="shadow focus:ring-2 hover:ring-red-700 font-bold text-gray-700 border-2 bg-red-500 border-none rounded py-3 px-4 mr-6"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
