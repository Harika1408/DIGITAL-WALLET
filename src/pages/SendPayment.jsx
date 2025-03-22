const SendPayment = () => {
  return (
    <div className="page-container">
      <h2>Send Payment</h2>
      <form>
        <input type="text" placeholder="Recipient Email" required />
        <input type="number" placeholder="Amount" required />
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendPayment;
