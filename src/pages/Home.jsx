const HomePage = () => {
  return (
    <div style={containerStyle}>
      <h1 style={{ fontWeight: "bold", fontStyle: "italic", color: "blue" }}>Welcome to PayEase</h1>
      
      <p style={{ fontStyle: "italic", color: "red" }}>Your seamless and secure digital payment solution.</p>
      



      
      <h2 style={{ fontWeight: "bold", fontStyle: "italic", color: "green" }}>
  How to Do a Transaction
</h2>



      <div style={stepsStyle}>
        <h3>Step 1: Log In or Sign Up</h3>
        <p>Access your account by logging in or signing up if you are new.</p>

        <h3>Step 2: Add a Payment Method</h3>
        <p>Link your bank account, debit card, or preferred payment method.</p>

        <h3>Step 3: Choose Transaction Type</h3>
        <p>Select whether you want to send or receive a payment.</p>

        <h3>Step 4: Enter Transaction Details</h3>
        <p>Fill in the recipient’s details, amount, and any required notes.</p>

        <h3>Step 5: Confirm & Complete</h3>
        <p>Review your transaction and confirm to proceed securely.</p>

        <h3>Step 6: Get Confirmation</h3>
        <p>Receive a success notification and check your transaction history.</p>
      </div>
    </div>
  );
};

// 🔹 *Styling for Centered Content*
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "80vh",
  padding: "20px",
};

const stepsStyle = {
  maxWidth: "600px",
};

export default HomePage;