const ReceivePayment = () => {
  return (
    <div className="page-container">
      <h2>Receive Payment</h2>
      <form>
        <input type="text" placeholder="Your Email" required />
        <input type="number" placeholder="Amount Requested" required />
        <button type="submit">Request Payment</button>
      </form>
    </div>
  );
};

export default ReceivePayment;
