import React, { Fragment, useState } from "react";
import "./Contact.css";
import axios from "axios";
import { useAlert } from "react-alert";

const Contact = ({ history, location }) => {
    const alert = useAlert();

    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    });

    const { name, email, number, message } = user;

    const registerDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const sendData = async function(myForm) {
        // const test_api = axios.create({baseURL:"http://localhost:4000"});
        // const { data } = await test_api.post(`/api/v1/message`, myForm);
        
        const { data } = await axios.post(`/api/v1/message`, myForm);
        history.push("/");
        alert.success("Form data submited Successfully");
    }

    const registerSubmit = (e) => {
        e.preventDefault();
    
        const myForm = {};

        myForm["name"] = name;
        myForm["email"] = email;
        myForm["number"] = number;
        myForm["message"] = message;
        
        sendData(myForm);
      };

  return (
    <Fragment>
        <div className="top">
            <h2>Contact us</h2>
            <form className="contactForm" onSubmit={registerSubmit}>
                <div className="form-group" id="messageForm">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name="name"
                        value={name}
                        onChange={registerDataChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" name="email"
                        value={email}
                        onChange={registerDataChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Number</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Number" name="number"
                        value={number}
                        onChange={registerDataChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"
                        value={message}
                        onChange={registerDataChange}></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </Fragment>
  );
};

export default Contact;