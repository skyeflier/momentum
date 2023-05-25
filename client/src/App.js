import React, { useState, useEffect } from "react";
import { ApolloProvider } from '@apollo/client';
import './App.css';

import Home from './components/pages/Home.js';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/graphql',
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
});

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Home /> {/* Include your other components here */}
      {message ? (
        <Message message={message} />
      ) : (
        <ProductDisplay />
      )}
    </ApolloProvider>
  );
}

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="client/public/mom-working-out.png"
        alt="Icon of athletic mom with baby"
      />
      <div className="description">
        <h3>MOMentum</h3>
        <h5>$5.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </section>
);
