import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/main";
import "../normalize.css";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {ContactMain} from "./kontakt";
import {Pricing} from "./pricing";
import {MainPage} from "./index";
import {AboutUs} from "./oNas"

function App() {
    return (
    //     <>
    //     <AboutUs/>
    //     <MainPage/>
    //     <Pricing/>
    //     <ContactMain/>
    //    </>
    
        <HashRouter>
            <Switch>
                <Route exact path="/" component={ContactMain}/>
                <Route path="/:service" component={ServiceInfo}/>
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>
    );
}

        function ServiceInfo(props) {
            
            if (props.match.params.service==="O Nas") {
                return  (
                    <>
                    <AboutUs/>
                    </>
                );
            }
            else {
                if (props.match.params.service === "/") {
                   
                    return (
                        <>
                        <MainPage/>
                        </>
                    )
                } else
                        {
                            if (props.match.params.service==="Cennik") {
                            
                                return  (
                                    <Pricing/>
                                );
                            }
                            else {
                            if (props.match.params.service==="Kontakt") {
                    
                                return  (
                                <ContactMain/>
                                );
                            }
                        }
                        }
                
                {

                    return <NotFound/>
                }
            }
        }
        function NotFound() {
            return <NavLink to="/">Powrót do strony głównej</NavLink>
        }

        ReactDOM.render(
            <App />,
            document.getElementById("app")
        );

export {
            App,
        };
