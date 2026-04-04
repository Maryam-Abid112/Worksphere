
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Signup({ onSwitch }) {
    const[name,setname]=useState("");
    const[email, setemail]=useState("");
    const[password,setpassword]=useState("");
    const[role,setrole]=useState("");

    const signup= async(e)=>{
        e.preventDefault();
        try{
        const {data}=await axios.post("http://localhost:5000/api/users/register",{
            name:name ,
            email:email,
            password:password,
            role:role
        });

         console.log(data);
      // storing the data and token
      localStorage.setItem("userInfo", JSON.stringify(data));
      
         alert("Signup successful");

        }catch(error){
            if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Server not running or connection error");
      }

          
 }

    }

    return (
           <div className="signin-box">
      <div className="signin-left">
        <h1>Welcome!</h1>
        <p>Create an account to access our services.</p>
      </div>
      <div className="signin-right">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" className="input-field" onChange={e => setname(e.target.value)} />
        <input type="text" placeholder="Email" className="input-field" onChange={e => setemail(e.target.value)} />
        <input type="password" placeholder="Password" className="input-field" onChange={e => setpassword(e.target.value)} />
        <select className="input-field" onChange={e => setrole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>
        <button className="signin-btn" onClick={signup}>Sign Up</button>
        <p className="signup-link">
          Already have an account? <span onClick={onSwitch} style={{ cursor: "pointer", color: "#7c3aed" }}>Sign In</span>
        </p>
      </div>
    </div>

    );
}

export default Signup;