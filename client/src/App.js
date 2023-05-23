import { ApolloProvider } from '@apollo/client';
import './App.css';

import Home from './components/pages/Home.js';
import ApolloClient from 'apollo-boost';
// import { Routes, Route } from 'react-router-dom';

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
  uri: '/graphql',
});

function App() {
  return <ApolloProvider client={client}>
    < Home />
  </ApolloProvider >
}

export default App;