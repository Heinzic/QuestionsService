import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store/storeTypes';

// Тут получается кольцевая зависимость между app и shared, но я хз как ее обойти, чтобы нормально было
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
