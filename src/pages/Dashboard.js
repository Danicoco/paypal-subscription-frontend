import React from 'react';
import { Row, Col } from 'antd';
import { PrivateBackground } from '../style';
import Navbar from '../components/Navbar';
import PriceList from '../components/PriceList';
import { priceLists } from '../components/pricing';
import { useQuery } from 'react-query';
import { currentPlan } from '../server';

const Dashboard = () => {
    const { isLoading, data } = useQuery('user-plan', currentPlan);
    return (
      <>
      <PrivateBackground />
      <Navbar current="payment" />
      <div className="pricing-body">
      <Row gutter={16}>
        {priceLists.map((item) => 
          <Col span={6}>
            <PriceList name={item.name} priceId={item.priceId} loading={isLoading} data={data} />
          </Col>
        )}
      </Row>
      </div>
      </>
    )
}

export default Dashboard;