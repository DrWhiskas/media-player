import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    music: [], //list of music
    
    token: ''
}

const musicSlice = createSlice( {
    name:"music",
    initialState,
    reducers: {
        addMusic: (state, action) => {
            state.music.push(action.payload)
        },
    }
})

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setToken:(state, action) =>{
            state.token= action.payload;
        },
        logout: (state) =>{
            state.token=''
        },
    }

})

export const {addMusic} = musicSlice.actions
export const {setToken, logout} = loginSlice.actions

export const store = configureStore({
    reducer: { music: musicSlice.reducer, login: loginSlice.reducer},
    devTools: true
})

export default store