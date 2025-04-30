import React, { useState } from "react";
import "./Login.css";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email.length === 0){
      alert("Email is required")
    }else if(password.length === 0){
      alert("Password is required")
    }else if(password.length < 8){
      alert("Password should be altlest of 8 character")
    }else{
      console.log(email);
      console.log(password);
    }

    

    setEmail("")
    setPassword("")
  };
  // const [user, setUser]= useState({
  //   email: "",
  //   password: "",
  // });
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(user);
  // }
  // const handleChange =(e) =>{
  //   const { name, value }= e.target;
  //   setUser({...user, [name]:value});
  // }
  return (
    <>
 <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Login to Foolivery</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input type="email" placeholder="Enter your mail" name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
          </div>

          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input type="password" placeholder="Enter password"name="password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
          </div>

          <button type="submit">Login</button>
        </form>
        <p className="tag">
          Don&apos;t have account? <Link to="/signup" className="log">Signup</Link>
        </p>
      </section>
    </main>
    </>
  );
};

export default Login;