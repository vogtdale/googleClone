import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState: {
        term: null
    },

    reducers: {
        setSearchTerm: (state,action) => {
            state.term = action.payload.term
        }
    }
})

export const {setSearchTerm} = searchSlice.actions
export const searchTerms = (state) => state.search.term

export default searchSlice.reducer