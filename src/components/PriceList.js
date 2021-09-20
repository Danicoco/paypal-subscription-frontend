import React from 'react';
import { PriceBody, PriceHeader, PriceItem } from '../style';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const PriceList = ({ name, priceId, data, loading }) => {
    const history = useHistory();
    const handleShow = () => {
        history.push(`/buy/${priceId}/${name}`);
    }
    return (
        <>
        {/* <PaymentModal handleCancel={handleShow} visible={visible} priceId={priceId} /> */}
        {name === "Silver" && (
            <PriceBody>
                <PriceHeader>{name}</PriceHeader>
                <PriceItem>10 users included</PriceItem>
                <PriceItem>2GB of storage</PriceItem>
                <PriceItem className="no-inclusive">Help center access</PriceItem>
                <PriceItem className="no-inclusive">Email Support</PriceItem>
                {data && (
                    data.priceId === priceId && data.status === "active" ?
                    <>
                    <Button
                    type="primary"
                    block
                    >Cancel Plan</Button>
                    </>
                    :
                    <Button
                    type="primary"
                    onClick={handleShow}
                    block
                    loading={loading}
                    >Upgrade Plan</Button>
                    
                )}
                
                
            </PriceBody>
        )}

        {name === "Gold" && (
            <PriceBody>
                <PriceHeader>{name}</PriceHeader>
                <PriceItem>50 users included</PriceItem>
                <PriceItem>5GB of storage</PriceItem>
                <PriceItem>Help center access</PriceItem>
                <PriceItem className="no-inclusive">Email Support</PriceItem>
                {data && (
                    data.priceId === priceId && data.status === "active" ?
                    <>
                    <Button
                    type="primary"
                    block
                    >Cancel Plan</Button>
                    </>
                    :
                    <Button
                    type="primary"
                    onClick={handleShow}
                    block
                    loading={loading}
                    >Upgrade Plan</Button>
                    
                )}
            </PriceBody>
        )}

        {name === "Platinum" && (
            <PriceBody>
                <PriceHeader>{name}</PriceHeader>
                <PriceItem>100 users included</PriceItem>
                <PriceItem>10GB of storage</PriceItem>
                <PriceItem>Help center access</PriceItem>
                <PriceItem className="no-inclusive">Email Support</PriceItem>
                {data && (
                    data.priceId === priceId && data.status === "active" ?
                    <>
                    <Button
                    type="primary"
                    block
                    >Cancel Plan</Button>
                    </>
                    :
                    <Button
                    type="primary"
                    onClick={handleShow}
                    block
                    loading={loading}
                    >Upgrade Plan</Button>
                    
                )}
            </PriceBody>
        )} 

        {name === "Ultimate" && (
            <PriceBody>
                <PriceHeader>{name}</PriceHeader>
                <PriceItem>1000 users included</PriceItem>
                <PriceItem>200GB of storage</PriceItem>
                <PriceItem>Help center access</PriceItem>
                <PriceItem>Email Support</PriceItem>
                {data && (
                    data.priceId === priceId && data.status === "active" ?
                    <>
                    <Button
                    type="primary"
                    block
                    >Cancel Plan</Button>
                    </>
                    :
                    <Button
                    type="primary"
                    onClick={handleShow}
                    block
                    loading={loading}
                    >Upgrade Plan</Button>
                    
                )}
            </PriceBody>
        )}
        </>
    )
}

export default PriceList;