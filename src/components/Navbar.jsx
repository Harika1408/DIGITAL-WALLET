import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/transactions">📜 Transactions</Link></li>
        <li><Link to="/receive-payment">💰 Receive</Link></li>
        <li><Link to="/send-payment">📤 Send</Link></li>
        <li><Link to="/settings">⚙ Settings</Link></li>
        <li><Link to="/login">🔑 Login</Link></li>
        <li><Link to="/signup">📝 Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
