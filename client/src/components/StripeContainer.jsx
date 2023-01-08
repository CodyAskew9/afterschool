import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import SignUpForm from './signUpForm'

const publicKey = 'pk_live_51MNlSrBM4lUJ1Y45JxRqcufv5gZrM4Q6BeilBccjFiM6DqBTCqXhBivbRfuKCPp2i6Bop0DxjEDhhM9VjkmbyP7T00ovokvKst'

const stripeTestPromise = loadStripe(publicKey)

export default function StripeContainer() {
  return (
  <Elements stripe={stripeTestPromise}>
<SignUpForm />
  </Elements>
  )
}
