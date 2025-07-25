//create two global hooks which are going to be 
//use app dispatch and the use app selector

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch } from "./index";
import type { RootState } from "./index";

//return a dispatch function
export const useAppDispatch = (selectCount: (state: RootState) => number) => useDispatch<AppDispatch>()

//return a selector function
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

