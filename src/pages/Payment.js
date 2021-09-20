import React, { useState } from 'react';
import { useStripe, useElements, 
    CardNumberElement, CardExpiryElement, 
    CardCvcElement 
} from '@stripe/react-stripe-js';
import { PrivateBackground, InputCard } from '../style';
import { Form, Card, Row, Col, Button } from 'antd';
import Navbar from '../components/Navbar';
import MessageAlert from '../components/MessageAlert';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { getUser, subscribeToPlan } from '../server';

const PaymentModal = () => {
  const { isLoading, error, data } = useQuery('personal-info', getUser);
  const mutation = useMutation(subscribeToPlan);
  const [err, setErr] = useState(null);
  const { id, plan } = useParams();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      //if stripe have not loaded yet
      //do not allow submission
      return;
    }

    //set err null if it's not null
    if(err !== null)
      setErr(null);

    //define card element
    const cardElement = elements.getElement(CardNumberElement);

    //if personal data was successfully loaded
    //use it to process paymnet
    if(data) {
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: data.name,
          email: data.email
        }
      });

      if (error) {
        setErr(error.message);
      }
  
      if(paymentMethod) {
        const values = {
          priceId: id,
          paymentMethodId: paymentMethod.id
        }

        await mutation.mutate(values);
      }

      if(mutation.data) {
        const clientSecret = mutation.data.clientSecret;
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              billing_details: {
                name: data.name,
                email: data.email
              }
            }
          }
        })

        if(result.error)
          console.log(result.error);
        if(result.paymentIntent)
          console.log(result.paymentIntent);
      }
    }

    if(!data) {
      setErr("There was problem getting your details");
    }

    
  };


  //if mutation.data returns, i'll use the client secret provided to authenticate the payment
  if(mutation.data) {
    window.location.href = "/dashboard"
  }

  return (
    <>
    <PrivateBackground />
    <Navbar />
    <div className="pricing-body">
    <p className="plan-header">Confirm and subscribe to --plan name--</p>
    <Card style={{ borderRadius: 33 }} loading={isLoading}>
      {error && (<MessageAlert type="error" message={error.message} />)}

        <Row>
            <Col span={12}>
                <h3 className="plan-heading">Billing Information</h3>
                {data && (
                  <>
                  <p>{data.name}</p>
                  <p>{data.email}</p>
                  </>
                )}
            </Col>
            <Col span={12}>
                {plan === "Silver" && (
                    <>
                    <h3 className="plan-heading">{plan}</h3>
                    <p className="plan-price">$30</p>
                    <p>10 users included</p>
                    <p>2GB of storage</p>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '1rem' }}>Recurring payments</p>
                    <p className="plan-footer">Per your consent, all future amounts
                        due will be charged to the payment method 
                        you have provided to SILVERBACKSTATS until you 
                        notify SILVERBACKSTATS otherwise.
                    </p>
                    </>
                )}

                {plan === "Gold" && (
                    <>
                    <h3 className="plan-heading">{plan}</h3>
                    <p className="plan-price">$30</p>
                    <p>50 users included</p>
                    <p>5GB of storage</p>
                    <p>Help center access</p>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '1rem' }}>Recurring payments</p>
                    <p className="plan-footer">Per your consent, all future amounts
                        due will be charged to the payment method 
                        you have provided to SILVERBACKSTATS until you 
                        notify SILVERBACKSTATS otherwise.
                    </p>
                    </>
                )}

                {plan === "Platinum" && (
                    <>
                    <h3 className="plan-heading">{plan}</h3>
                    <p className="plan-price">$30</p>
                    <p>100 users included</p>
                    <p>10GB of storage</p>
                    <p>Help center access</p>
                    <p>Email Support</p>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '1rem' }}>Recurring payments</p>
                    <p className="plan-footer">Per your consent, all future amounts
                        due will be charged to the payment method 
                        you have provided to SILVERBACKSTATS until you 
                        notify SILVERBACKSTATS otherwise.
                    </p>
                    </>
                )}

                {plan === "Ultimate" && (
                    <>
                    <h3 className="plan-heading">{plan}</h3>
                    <p className="plan-price">$30</p>
                    <p>1000 users included</p>
                    <p>200GB of storage</p>
                    <p>Help center access</p>
                    <p>Email Support</p>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '1rem' }}>Recurring payments</p>
                    <p className="plan-footer">Per your consent, all future amounts
                        due will be charged to the payment method 
                        you have provided to SILVERBACKSTATS until you 
                        notify SILVERBACKSTATS otherwise.
                    </p>
                    </>
                )}
            </Col>
        </Row>
    </Card>
    <div className="mt-3">
    <Card style={{ borderRadius: 33 }} loading={isLoading}>
        {err && (<MessageAlert type="error" message={err} />)}
        {mutation.error && (<MessageAlert type="error" message={mutation.error.message} />)}
        {mutation.data && (<MessageAlert type="error" message={`You've successfully subscribe to ${plan}`} />)}
        <Form onFinish={handleSubmit}>
        <Row>
            <Col span={24}>
                <p>Card Number</p>
                <InputCard>
                <CardNumberElement 
                options={{
                    iconStyle: 'solid',
                    style: {
                      base: {
                        fontSize: '20px',
                        fontWeight: 400,
                        textAlign: 'center',
                        padding: '30px',
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
                </InputCard>
                
            </Col>
        </Row>
        <Row gutter={10}>
            <Col span={12}>
                <p>Expiry Number</p>
                <InputCard>
                <CardExpiryElement 
                options={{
                    iconStyle: 'solid',
                    style: {
                      base: {
                        fontSize: '20px',
                        fontWeight: 400,
                        textAlign: 'center',
                        padding: '30px',
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
                </InputCard>
                
            </Col>
            <Col span={12}>
                <p>Card CVC</p>
                <InputCard>
                <CardCvcElement 
                options={{
                    iconStyle: 'solid',
                    style: {
                      base: {
                        fontSize: '20px',
                        fontWeight: 400,
                        textAlign: 'center',
                        padding: '30px',
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
                </InputCard>
            </Col>
        </Row>
        <Button
        disabled={!stripe}
        block
        className="mt-3"
        htmlType="submit"
        type="primary"
        loading={mutation.isLoading}
        >
            Pay
        </Button>
        </Form>
    </Card>
    <p>Go back</p>
    </div>
    </div>
    </>
  );
};

export default PaymentModal;