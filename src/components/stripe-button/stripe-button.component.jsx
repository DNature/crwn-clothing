import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_6Qz6uxLRsBgrmW2uaYz2FL0z00Y3Ik2ceb";

  const onToken = token => {
    console.log(token)
    alert("Payment Successfull")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
    />
  )
}

export default StripeCheckoutButton
