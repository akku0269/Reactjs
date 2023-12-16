/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


// step 2: We are making a context provider 
// which will provide all states

const UserContextProvider = ({children}) =>{                    // children outlet type hai hai, jo bhi aara hai usko aage pass krna
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>            {/*Hum object diye hai kyuki(bahut sara data de sake) User context ki property hai provider inbuilt, Provider to koi data bhi dena hoga krkr humlog user,setuser diye hai  */}
        {children}                                                {/* kuch bhi aa sakta hai isme ye ek div type hai  */}
        </UserContext.Provider>
    )

}

export default UserContextProvider