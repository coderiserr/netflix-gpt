export const Validate=(email,password)=>{
 const validemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const validpassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if (!validemail) return "Email is not validate";
  if (!validpassword) return "Password is not Correct"; 

  return null;
}