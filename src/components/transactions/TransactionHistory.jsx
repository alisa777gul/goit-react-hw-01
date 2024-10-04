import "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {

  const transactionTypes = {
    invoice: "Invoice",
    withdrawal: "Withdrawal",
    payment: "Payment",
    deposit: "Deposit",
  };

  return (
    
      <table >
        <thead className="table-head">
          <tr className="headers">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="id" key={item.id}>
              <td className="type">{transactionTypes[item.type] || "Unknown"}</td>
              <td className="amount">{item.amount}</td>
              <td className="currency">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default TransactionHistory;