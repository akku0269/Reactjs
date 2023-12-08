import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>                  {/*Comment :   header aur footer same rahega baki sab change hoga outlet jha bhi dalenge us jagah ki chz change hogi baki sab same rahega */}
        <Footer/>
        </>
    )
}

export default Layout