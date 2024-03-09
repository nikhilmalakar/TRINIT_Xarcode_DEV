import React, { useState } from "react";
import "./Payment_page.css";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    // Here you can integrate with a payment processing service like Stripe
    // Implement your payment processing logic here
    // For demonstration purposes, let's just simulate a loading state
    setProcessingPayment(true);
    setTimeout(() => {
      alert("Payment processed successfully!");
      setProcessingPayment(false);
    }, 2000);
  };

  return (
    <div className="container">
    <div className="payment-page">
      <h2>Payment Details</h2>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <label>
          Name on Card:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" disabled={processingPayment}>
          {processingPayment ? "Processing..." : "Submit Payment"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default PaymentPage;
