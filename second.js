import React from 'react';
function Second(props) {
  return (
    <div>
      <h2>LogIn Form</h2>
      <p>First Name :{props.name}</p>
      <p>Last Name :{props.lname}</p>
      <p>Age : {props.age}</p>
      <p>Address : {props.Address} </p>
    </div>
  );
}
export default Second;
