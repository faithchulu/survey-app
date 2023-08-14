import bcrypt from "bcryptjs";
import { useState, useEffect } from "react"; 
import logo from "../../assets/images/logo.png";
import supermarket from "../../assets/images/supermarket.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {

  const [email, emailupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [success, setsuccess] = useState(false);
  useEffect(() => {
    console.log("Updated username after login:", loggedInUsername);
  }, [loggedInUsername]);
  
  let navigate = useNavigate();  // Get the navigate function

 

  const ProceedLogin = (e) => {
    e.preventDefault();
  
    if (validate()) {
      axios.get("http://localhost:4000/users?email=" + email)
        .then(res => {
          if (res.data.length === 0) {
            throw new Error('No user found with this email');
          }
          console.log(res);
          return res.data[0];  // get first user (we expect unique emails)
        })
        .then(user => {
          // Use bcrypt to compare the entered password with the hashed password from the database
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.error("Error during password comparison:", err);
              alert("Login failed, try again!");
              return;
            }
  
            if (isMatch) {
              const name = user.username;
              setLoggedInUsername(name);
              console.log("Logged in username within callback:", name);
              navigate('/dashboard', { state: { username: name } }); 

              console.log("login true");
              navigate('/dashboard');  // Use navigate for routing
            
              setLoggedInUsername(user.username);
              console.log("Username after login:", loggedInUsername);
 
            } else {
              alert("Login failed, incorrect password!");
            }
          });
        })
        .catch(err => {
          console.error("Login failed due to:", err.message);
          alert("Login failed, try again!");
        });
    }
  }
  

  const validate =()=>{
    let result = true;

    if(password === '' || password === null){
      result=false;
      alert("Please enter password!");
    }

    if(email === '' || email === null){
      result=false;
      alert.warning("Please enter email!");
    }
    return result;
  }

  return (
    <div className="App bg-cover bg-center min-h-screen p-6"  style={{ backgroundImage: `url(${supermarket})` }}>
      
      <div>
        <a href="/selectsurvey" >
          <button
                className="flex right-0 justify-center rounded-md bg-black px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"     
         >
                Go To Current Survey
         </button>
          </a>

      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form onSubmit={ProceedLogin} className="space-y-6" /*action="#" method="POST"*/>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e=>emailupdate(e.target.value)}
                  autoComplete="email"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
            
                  Password
                </label>
                </div>            
                <div className="text-sm">
                  <a
                    href="/dashboard"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  
                  onChange={e=>passwordupdate(e.target.value)}
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
