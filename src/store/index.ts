import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import { useSelector,useDispatch,TypedUseSelectorHook } from 'react-redux';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export default store;

