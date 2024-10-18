import {createSlice} from "@reduxjs/toolkit";

//defining the shape of the initial state  ie types
interface NavState {
    origin: string | null;
    destination: string | null;
    travelTimeInformation: number | null;
}

const initialState: NavState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// define RootState as the type of the state parameter for selectors
interface RootState {
    nav: NavState
}

//selectors
export const selectOrigin = (state: RootState) => state.nav.origin
export const selectDestination = (state: RootState) => state.nav.destination
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation

export default navSlice.reducer