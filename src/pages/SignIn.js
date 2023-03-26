import  {useContext, useState} from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";




const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/SignIn', {
                email,
                password,
            });
            setUser(data);
            alert("Login successful!");
            setRedirect(true);
        } catch (e) {
            alert('Login failed. Please try again later')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-2xl mx-auto" onSubmit={handleLoginSubmit}>
          <input type={"email"} 
          placeholder="your@email.com"
          value={email}
          onChange={ev => setEmail(ev.target.value)}/>
          <input type={"password"} 
          placeholder="password"
          value={password}
          onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">Don't have an account yet? 
            <Link className="underline text" to={'/SignUp'}> 
                Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
