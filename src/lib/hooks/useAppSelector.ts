import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '../../modules/store';

// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
