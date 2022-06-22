import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { fetchUser } from './app/reducer/useReducer';
import { RootState } from './app/store';
import Counter from './components/Counter';

function App() {
  const dispatch = useAppDispatch()
  const userList = useSelector((state:RootState) => state.userReducer.userList)
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div className="App">
      {userList.length > 0 && <p>User list length: {userList.length}</p>}
      <Counter />
    </div>
  );
}

export default App;
