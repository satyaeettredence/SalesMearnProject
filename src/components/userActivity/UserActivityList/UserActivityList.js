import React from 'react';
import { List, Typography, Avatar } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// Sample data for recent activities
const activities = [
  { id: 1, user: 'John Doe', action: 'purchased Product X', timestamp: '2024-09-03T14:32:00' },
  { id: 2, user: 'Jane Smith', action: 'logged in', timestamp: '2024-09-03T14:30:00' },
  { id: 3, user: 'Alice Johnson', action: 'added Product Y to cart', timestamp: '2024-09-03T14:29:00' },
  { id: 4, user: 'Bob Brown', action: 'reviewed Product Z', timestamp: '2024-09-03T14:28:00' },
  { id: 5, user: 'Charlie Davis', action: 'purchased Product W', timestamp: '2024-09-03T14:27:00' },
  { id: 1, user: 'John Doe', action: 'purchased Product X', timestamp: '2024-09-03T14:32:00' },
  { id: 2, user: 'Jane Smith', action: 'logged in', timestamp: '2024-09-03T14:30:00' },
  { id: 3, user: 'Alice Johnson', action: 'added Product Y to cart', timestamp: '2024-09-03T14:29:00' },
  { id: 4, user: 'Bob Brown', action: 'reviewed Product Z', timestamp: '2024-09-03T14:28:00' },
  { id: 5, user: 'Charlie Davis', action: 'purchased Product W', timestamp: '2024-09-03T14:27:00' },
];

function UserActivityList  ()  {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography.Title level={3}>Recent User Activities</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={activities}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.user}
              description={<>{item.action} <Typography.Text type="secondary">({new Date(item.timestamp).toLocaleTimeString()})</Typography.Text></>}
            />
          </List.Item>
        )}
        style={{ maxHeight: '400px', overflowY: 'scroll' }}
      />
    </div>
  );
};

export default UserActivityList;
