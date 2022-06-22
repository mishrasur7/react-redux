import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { increment, decrement } from '../app/reducer/counterReducer'

const Counter = () => {
    const dispatch = useAppDispatch()
    const count = useSelector((state: RootState) => state.counterReducer.count)

  return (
    <div>
        <p>Count: {count}</p>
        <section>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </section>
    </div>
  )
}

export default Counter