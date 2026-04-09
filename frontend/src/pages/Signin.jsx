import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function SignIn({ onSwitch }) {
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const navigate = useNavigate();
  

  const onclick = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/api/users/login", {
        email: email,
        password: password
      });

      console.log(data);
      // storing the data and token
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      alert("Login successful");

        if (data.role === "client") {
      navigate("/Client");
    } else if(data.role=="freelancer") {
      navigate("/Dashboard");
    }else{
         console.log("Error");
    }

    } catch (error) {
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
        <h1>Welcome back!</h1>
        <p>You can sign in with your existing account.</p>
      </div>
      <div className="signin-right">
        <h2>Sign In</h2>
        <input type="text" placeholder="Email" className="input-field" onChange={e => setemail(e.target.value)} />
        <input type="password" placeholder="Password" className="input-field" onChange={e => setpasword(e.target.value)} />
        <button className="signin-btn" onClick={onclick}>Sign In</button>
        <p className="signup-link">
          New here? <span onClick={onSwitch} style={{ cursor: "pointer", color: "#7c3aed" }}>Create an Account</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;