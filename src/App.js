import React from 'react';
import { gql } from 'apollo-boost';
import { Query ,ApolloProvider,useQuery} from "react-apollo";
import ApolloClient from "apollo-boost";
const QUERY_USERS = gql`
query {
  users {

    name

  }
}
`;



export function UserInfo() {

  // Polling: rovides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  const { data, loading } = useQuery(QUERY_USERS, { pollInterval: 500 });
  console.log(data)
  // should handle loading status
  if (loading) return <p>Loading...</p>;

  return data.users.map(({  name }) => (
    <div>
      <p>
       { name }
      </p>
    </div>
  ));
}

const client = new ApolloClient({
    uri: 'http://54.197.2.14/graphql/',
});


 const App = () => (
  <ApolloProvider client={client}>
    <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>My first Apollo app 🚀</h2>


      <UserInfo/>

    </div>
  </ApolloProvider>

);
export default App;
