import * as React from 'react';
import {NavBar} from "../nav-bar/NavBar";
import {Outlet} from "react-router-dom";

type Props = {};
export const Layout = (props: Props) => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
};