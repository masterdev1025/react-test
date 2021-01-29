import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Lists from '../components/Lists';
import User from '../components/User';
import Sidebar from '../components/SideBar'
import { useLoginContext } from '../utils/GlobalState';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [state] = useLoginContext();
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
                <Route path='/' component={HeroSection} exact />
                {
                    !state || (state && !state.isAuthenticated) ? <Redirect to='/login' /> :
                        <>
                            <Route path='/Lists' component={Lists} exact />
                            <Route path='/User' component={User} exact />
                        </>
                }

                <Redirect to='/' />
            </Switch>
        </div>
    )
}
export default Home;
