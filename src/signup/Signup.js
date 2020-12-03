import React, {useRef} from 'react'
import "./signup.css"
import {Form, Button,Card} from "react-bootstrap"
import { Link} from "react-router-dom"


export default function Signup() {
    const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()


    return (
        <divs>
            <Card>
                <div className="w-100 text-enter at-2">
                    Aready have an account? <Link to="/login" className="login__up"><h4>Log In</h4></Link>
                </div>
                <Card.body>
                    <h5 className="text-center mb-4"> 
                        Sign Up
                    </h5>
                    <Form>
                       <Form.Group id="email">
                         <Form.label>
                            <h5>Email</h5> 
                         </Form.label>
                         <Form.Control type="email" ref={emailRef}/>
                       </Form.Group>
                       <Form.Group id="passwaord">
                         <Form.label>
                            <h5>Passwaord</h5> 
                         </Form.label>
                         <Form.Control type="password" ref={passwordRef}/>
                       </Form.Group>
                        <Form.Group id="passwordconfirm">
                         <Form.label>
                            <h5>Password-Confirmation</h5> 
                         </Form.label>
                         <Form.Control type="password" ref={passwordConfirmRef}/>
                       </Form.Group>
                       <Button className="w-100" type="sumbit">Sign-Up</Button> 
                    </Form>
                </Card.body>
            </Card>
        </divs>
    );
}


