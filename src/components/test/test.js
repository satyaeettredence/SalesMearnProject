import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSales } from '../../ReduxState/dispatch/salesDispatch';
import TestCard from './testCard';

const TestMock = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.items);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map(user => (
        <TestCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TestMock;