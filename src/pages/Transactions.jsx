import { useState } from "react";

const Transactions = () => {
  const [search, setSearch] = useState("");
  const transactions = [
    { id: 1, date: "2025-03-20", amount: "$200", type: "Received" },
    { id: 2, date: "2025-03-18", amount: "$50", type: "Sent" },
    { id: 3, date: "2025-03-15", amount: "$120", type: "Received" },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.date.includes(search) || transaction.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2>Transaction History</h2>
      <input
        type="text"
        placeholder="Search by date or type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <li key={transaction.id} style={{ margin: "10px 0" }}>
              {transaction.date} - {transaction.amount} ({transaction.type})
            </li>
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </ul>
    </div>
  );
};

export default Transactions;
