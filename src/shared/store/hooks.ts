import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store/storeTypes';

// Тут получается зависимость shared от app, но я хз как ее обойти, чтобы нормально было
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
