import { useState } from "react";

const Login = () => {
  const [usePhone, setUsePhone] = useState(false);

  return (
    <div className="page-container">
      <h2>Login</h2>
      <form>
        {usePhone ? (
          <input type="tel" placeholder="Phone Number" required />
        ) : (
          <input type="email" placeholder="Email" required />
        )}
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        {usePhone ? "Use Email Instead?" : "Use Phone Number Instead?"}{" "}
        <button
          onClick={() => setUsePhone(!usePhone)}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Click Here
        </button>
      </p>
    </div>
  );
};

export default Login;
