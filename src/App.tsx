import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { fetchUser } from './app/reducer/useReducer';
import { RootState } from './app/store';

function App() {
  const dispatch = useAppDispatch()
  const userList = useSelector((state:RootState) => state.userReducer.userList)
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div className="App">
      {userList.length > 0 && <p>User list length: {userList.length}</p>}
    </div>
  );
}

export default App;
