import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Footer from "./Footer";

function contactInfo(contact){
  return(
    <Card
     id = {contact.id}
    key = {contact.id}
    name = {contact.name}
    imgURL = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}  />
  );
  
}

function App() {
  
//   console.log(contacts);
  return (
    <div>
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(contactInfo)}
      {/* <Card
       name={contacts[0].name}
       imgURL={contacts[0].imgURL}
       phone= {contacts[0].phone}
       email= {contacts[0].email}
     >
      </Card>
      <Card
      name={contacts[1].name}
      imgURL={contacts[1].imgURL}
      phone= {contacts[1].phone}
      email= {contacts[1].email}>
      
      </Card>
      <Card
      name={contacts[2].name}
      imgURL={contacts[2].imgURL}
      phone= {contacts[2].phone}
      email= {contacts[2].email}>
      </Card> */}
      
     </div>
     <div>
         <Footer></Footer>
     </div>
     </div>
  );
}

export default App;
