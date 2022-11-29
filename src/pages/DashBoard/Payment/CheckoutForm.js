import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe()
  const elements = useElements()
  const { price } = booking
  console.log(price)
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState('');

  // useEffect( () =>{
  //   fetch('https://doctors-portal-server-mu-five.vercel.app/create-payment-intent', {
  //     method: "POST", 
  //     headers: {
  //       "Content-Type" : "application/json"
  //     } , 
  //     body: JSON.stringify({items : [{id: "xl-tshirt"}]})
  //   })
  //   .then(res => res.json())
  //     .then(data => setClientSecret(data.clientSecret))
  // } ,[])


//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("https://doctors-portal-server-mu-five.vercel.app/create-payment-intent", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `bearer ${localStorage.getItem('accessToken')}`
//         },
//         body: JSON.stringify({ price }),
//     })
//         .then((res) => res.json())
//         .then((data) => setClientSecret(data.clientSecret));
// }, [price]);

  const handleSubmit = async (event) => {

    event.preventDefault()
    if (!stripe || !elements) {
      //stripe js has not loaded yet . Make sure to disable
      // form submission until stripe.js has loaded 
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return;

    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log(error)
      setCardError(error.message)
    } else {
      setCardError('')
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline btn-secondary mt-6' type="submit" disabled={!stripe }
        
        >
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
    </>
  );
};

export default CheckoutForm;