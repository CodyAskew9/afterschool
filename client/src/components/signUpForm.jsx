import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios'
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './signUpForm.css'
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base:{
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {color:"#fce883"},
      "::placeholder": {color: "white"},
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee"
      }
    }
  }
}

export default function SignUpForm() {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    e.preventDefault();

    const{error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (error) {
      try {
        const {id} = paymentMethod
        const response = await axios.post('http://localhost:5000/payment',{
          amount: 12500,
          id
        }) 
        if(response.data.success) {
          console.log('Successful payment')
         setSuccess(true) 
        }
      } catch (error) {
        console.log("errer".error)
      }
    }else{
      console.log(error.message)
    }

  };

  return (
    <>
    {!success ?

    <Form className='form' onSubmit={handleSubmit}>
       <Form.Group className="mb-3">
       <Form.Label>Credit Card Info</Form.Label>
      <fieldset className='FormGroup'>
        <div className='FormRow'>
          <CardElement options={CARD_OPTIONS} />
        </div>
        </fieldset>
       </Form.Group>
      <Button className='btn'>Pay</Button>
    </Form>
    :
    <div>
      <h2>Registration Success</h2>
    </div>
    }
      </>
  )
};
 
