import './App.css';
import Navigation from './navigation';
import 'antd/dist/antd.css';
import {  Elements  } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_LMVXdzCFa1FDySoP2NWmqHRq");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <Navigation />
    </Elements>
  );
}

export default App;
