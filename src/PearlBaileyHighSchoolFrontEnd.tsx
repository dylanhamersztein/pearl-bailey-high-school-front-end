import React from 'react';
import './PearlBaileyHighSchoolFrontEnd.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./app/components/layout/Layout";

const PearlBaileyHighSchoolFrontEnd = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*TODO pages go in here*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default PearlBaileyHighSchoolFrontEnd;
