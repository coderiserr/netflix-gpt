import { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";

const Login = () => {
  const [isSignform, setIssignform] = useState(true)
  const [meassage,setMessage]=useState(null)
  const email =useRef(null);
  const password =useRef(null);
 
  const istoggle = () => {
    setIssignform(!isSignform);
  }
  const handleEvent=()=>{
   const meassage=Validate(email.current.value,password.current.value);
   setMessage(meassage);
  }

  
  return (
    <div>
      <Header />
      <div >
        <img className=" w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg" alt="" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=" items-center w-3/12 absolute p-12  bg-black/70 text-white m-auto top-28 right-0 left-0">
        <h1 className="text-3xl font-bold py-4 px-2">{isSignform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignform &&
          <input type="text" placeholder="Full Name" className="p-3 my-4 w-full h-16 text-lg rounded-md border-solid border-2 border-sky-500 bg-transparent"
          />}
        <input ref={email}
          type="text" placeholder="Email or Mobile Number" className="p-3 my-4 w-full h-16 text-lg rounded-md border-solid border-2 border-sky-500 bg-transparent"
        />
       
        <input ref={password}
          type="password" placeholder="Password" className="p-3 my-4 w-full h-16 text-lg rounded-md border-solid border-2 border-sky-500 bg-transparent"
        />
        <p className="text-red-700 font-bold">{meassage}</p>
        <button  onClick={handleEvent}
          className="w-full bg-red-800 py-4 m-2 rounded-md">{isSignform ? "Sign In" : "Sign Up"}
        </button>
        <h3
          className="flex justify-center py-2">OR
        </h3>
        <button
          className=" bg-slate-400 w-full p-4 m-2 font-bold rounded-md" >
          {isSignform ? "Use a sign-in code" : "Use a sign-up code"}
        </button>
        {isSignform &&
          <h2 className="flex justify-center py-4">Forget Password?
          </h2>}
        <h2
          className="m-4 cursor-pointer" onClick={istoggle}>
          {isSignform ? "New to Netflix? Sign up now." : "Already Registered Sign In Now.."}
        </h2>
      </form>
    </div>
  )
}
export default Login;
