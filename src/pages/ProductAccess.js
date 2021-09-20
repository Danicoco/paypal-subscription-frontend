import React from 'react';
import Navbar from '../components/Navbar';
import { PrivateBackground } from '../style';
import { useQuery } from 'react-query';
import { showProduct } from '../server';
import MessageAlert from '../components/MessageAlert';

const ProductAccess = () => {
    const { isLoading, error, data } = useQuery('product', showProduct);
    return (
        <>
          <PrivateBackground />
          <Navbar />
          {error && (<MessageAlert type="error" message={error.message} />)}
          {/* A loading spinner should replace this */}
          {isLoading && (<MessageAlert type="info" message="Loading" />)}
          {data && (
              <>
              <p>Yes, I've access to the product</p>
              <p>My name: {data.name}</p>
              </>
          )}
        </>
    )
}

export default ProductAccess;