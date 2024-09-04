import React from 'react';
import { List, Typography, Alert } from 'antd';

const { Title } = Typography;

const StockProducts = ({ products, threshold }) => {
  // Function to determine if stock is low
  const isLowStock = (quantity) => quantity < threshold;

  return (
    <div>
      <Title level={2}>Low Stock Products</Title>
      <List
        bordered
        dataSource={products}
        renderItem={product => (
          <List.Item
            style={{
              backgroundColor: isLowStock(product.quantity) ? '#ffdddd' : 'white',
              fontWeight: isLowStock(product.quantity) ? 'bold' : 'normal',
            }}
          >
            {product.name} - {product.quantity} units
            {isLowStock(product.quantity) && (
              <Alert
                style={{ marginLeft: '16px' }}
                message="Low Stock"
                type="error"
                showIcon
              />
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default StockProducts;
