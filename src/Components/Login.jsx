
import { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constant";



const Login = () => {
  const [isSignform, setIssignform] = useState(true);
  const [message, setMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);


  const istoggle = () => {
    setIssignform(!isSignform);
  };

  const handleEvent = () => {
    const message = Validate(email.current.value, password.current.value);
    setMessage(message);

    if(message) return;
   // ✅ No re-declaration

    if(!isSignform){
      //sign up logic
      

    createUserWithEmailAndPassword( auth,email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode +"-"+ errorMessage);
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode+"-"+errorMessage);
  });
    }
    

  

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Header />
      <div className="w-full">
        <img
          className="w-full h-auto"
          src={LOGO}
          alt="background"
        />
      </div>
      <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        
        className="flex flex-col items-center  w-full sm:w-3/12 sm:max-w-md p-8 bg-black/70 text-white m-auto absolute top-[100px] left-1/2 transform -translate-x-1/2 rounded-md"
      >
        <h1 className="text-3xl font-bold py-4 px-2 text-center">
          {isSignform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full h-16 text-lg rounded-md border-solid border-2 border-sky-500 bg-transparent"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-3 my-4 w-full h-16 text-lg rounded-md border-solid border-2 border-sky-500 bg-transparent"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full h-16 text-lg rounded-md border-solid border-2 border-sky-500 bg-transparent"
        />
        <p className="text-red-700 font-bold">{message}</p>
        <button
          onClick={handleEvent}
          className="w-full bg-red-800 py-4 m-2 rounded-md"
        >
          {isSignform ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="flex justify-center py-2">OR</h3>
        <button className="bg-slate-400 w-full p-4 m-2 font-bold rounded-md">
          {isSignform ? "Use a sign-in code" : "Use a sign-up code"}
        </button>
        {isSignform && (
          <h2 className="flex justify-center py-4">Forget Password?</h2>
        )}
        <h2
          className="m-4 cursor-pointer text-center"
          onClick={istoggle}
        >
          {isSignform
            ? "New to Netflix? Sign up now."
            : "Already Registered Sign In Now.."}
        </h2>
      </form>
      </div>
    </div>
  );
};

export default Login;

