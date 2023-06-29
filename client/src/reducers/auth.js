const authReducer = (state={data:null}, actions) => {
    //state is data
    //action would be what to perfrom

    switch(actions.type){
        case 'AUTH':
            //?. that means if data exists data is returned
            //? without this conditional operator dot will throw an error in case of no data
            localStorage.setItem('Profile',JSON.stringify({...actions?.data}))
            return {...state, data:actions?.data};
        case 'LOGOUT':
            localStorage.clear()
            return{...state, data:null }
        case "OTP":
             return {...state, data:actions?.data};
        default:
            return state;
    }

}

export default authReducer