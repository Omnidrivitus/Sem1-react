import { useState } from "react";
function Butt() {
  const [test1, test2] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hello = () => {
    test2(!test1);
  };

  const hi = () => {
    test2(false);
  };

  return (
    <>
      <button onClick={hello} className="shop">
        Shop now <i className="fa-solid fa-arrow-right"></i>
      </button>

      {test1 && (
        <div className="containers">
            <div className="form">
            <h2>Sign-up form</h2>
            <form action="">
                <div className="details">
                <i className="fa-solid fa-user"></i>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />

                <i className="fa fa-envelope"></i>
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />

                <i className="fa fa-lock"></i>
                <input
                    type="password"
                    placeholder="Create Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />

                <i className="fa fa-lock"></i>
                <input
                    type="password"
                    placeholder="Retype Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
                <br />

                <button onClick={hi}>Close</button>
                </div>
            </form>
            <button>Sign-up</button>
            </div>
        </div>
      )}
    </>
  );
}

export default Butt;

/* 
git mean vertual control system

 */