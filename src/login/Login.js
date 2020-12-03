import React, { useState } from "react";
import "./login.css";
import { Button, FormGroup, FormControl, FormLabel,card } from "react-bootstrap";
import { Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (

    <div className="login-wrap">
      <div className="container__Login">
        <div className="cont__Card">
          <img src="../img/cloud.svg" alt="" />
          <form onSubmit={handleSubmit} className="login-form">
            <FormGroup formId="email" bsSize="large">
              <FormLabel>
                <h5 className="email">E-mail</h5>
              </FormLabel>

              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <br></br>
            <FormGroup formId="password" bsSize="large">
              <FormLabel>
                <h5>Password</h5>
              </FormLabel>

              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Remember Me
              </label>
            </div>
            </FormGroup>
            <br></br>
           
            <div className="last">
              <Button
                block
                bsSize="large"
                disabled={!validateForm()}
                type="submit"
              >
                Submit
              </Button>
              <br></br>
              <Link to="/forget" className="forget">
                <h4>Forgotten password</h4>
              </Link>

              <hr></hr>
              <Button> Add Account Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
      <card></card>
    </div>
  );
}
