import "./Signup.css"
import React, { useState } from "react";
import { LockKeyhole, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
const Singup =()=>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber]= useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(e)=>{
      e.preventDefault();


      if(name.length === 0){
        alert("Name is required")
      }else if(email.length === 0){
        alert("Email is required")
      }else if(phonenumber.length === 0){
        alert("Email is required")
      }else if(phonenumber.length!==10){
        alert("Phonenumber should be altlest of 10 character")
      }else if(password.length === 0){
        alert("Password is required")
      }else if(password.length < 8){
        alert("Password should be altlest of 8 character")
      }
      else{
        console.log(name);
        console.log(email);
        console.log(phonenumber);
        console.log(password);
      }

      
      
      setName("")
      setEmail("")
      setPhoneNumber("")
      setPassword("")
    }
    return(
        <>
        
        <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Signup to Foolivery</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signupInput">
            <User size={22} strokeWidth={1.5} />
            <input type="text" placeholder="Enter your full name"name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input type="email" placeholder="Enter your mail" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signupInput">
            <Phone size={22} strokeWidth={1.5} />
            <input type="number" placeholder="Enter your phone" name="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input type="password" placeholder="Enter password" name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Signup</button>
        </form>
        <p className="tag">
          Already have account? <Link to="/Login" className="log">Login</Link>
        </p>
      </section>
    </main>
        </>
    )
}
export default Singup;