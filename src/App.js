import React from 'react';
// import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

class App extends React.Component {
  state = { 
    profiles: [],
    isLoaded: true,
   };

  componentDidMount() {
    this.fetchProfiles();
  }

  fetchProfiles = () => {
    axios.get('https://api.enye.tech/v1/challenge/records')
          .then((response) => {
            const {profiles} = response.data.records;

            this.setState({ profiles });
          })
          .catch((error) =>{
            console.log(error);
          })
  }

  render() {

    const { profiles } = this.state;

    return (
      <div>
        <ReactBootStrap.Container>
        <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => {
                return(
                  <tr key={profile.userName}>
                    <td>{profile.FirstName}</td>
                    <td>{profile.LastName}</td>
                    <td>{profile.Gender}</td>
                    <td>{profile.Email}</td>
                    <td>{profile.PhoneNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </ReactBootStrap.Table>
        </ReactBootStrap.Container>
      </div>
    );
  }
}

export default App;


// "FirstName": "Carlotta",
// "LastName": "Padberg",
// "Gender": "Prefer to skip",
// "Latitude": -46.2202,
// "Longitude": 109.76865,
// "CreditCardNumber": "5199793903647280",
// "CreditCardType": "MasterCard",
// "Email": "SLfoODX@RKVOiUC.org",
// "DomainName": "rXglZBh.ru",
// "PhoneNumber": "569-123-8107",
// "MacAddress": "3e:c2:14:96:d9:53",
// "URL": "http://rdyVGEx.com/iHnIngp.html",
// "UserName": "gITQgTf",
// "LastLogin": "2004-06-26 18:12:42",
// "PaymentMethod": "paypal"
/* <li key={profile.username}>
              Name: {profile.FirstName} {profile.LastName}
            </li> */
