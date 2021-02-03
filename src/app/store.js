import {configureStore} from "@reduxjs/toolkit"
import searchReducer from "../feature/searchSlice"

export default configureStore({
    reducer: {
        search: searchReducer,
    }
})