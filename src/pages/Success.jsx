import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "green" }}>
      <h1>Payment Successful!</h1>
      <Link to="/transactions" style={{ display: "block", marginTop: "20px", padding: "10px 20px", background: "blue", color: "white", textDecoration: "none", borderRadius: "5px" }}>
        View Transactions
      </Link>
    </div>
  );
};

export default Success;
