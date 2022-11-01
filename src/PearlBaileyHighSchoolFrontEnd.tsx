import React from "react";
import "./PearlBaileyHighSchoolFrontEnd.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./app/components/layout/Layout";
import StudentPage from "./app/components/students-page/StudentPage";
import TeacherPage from "./app/components/teachers-page/TeacherPage";
import CoursePage from "./app/components/courses-page/CoursePage";

const PearlBaileyHighSchoolFrontEnd = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element=<Layout/>>
                    <Route path="students" element=<StudentPage/>/>
                    <Route path="teachers" element=<TeacherPage/>/>
                    <Route path="courses" element=<CoursePage/>/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default PearlBaileyHighSchoolFrontEnd;
