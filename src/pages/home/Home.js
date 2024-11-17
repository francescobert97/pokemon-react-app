import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/thunk";


import styles from './Home.module.css'
import HomeSingleMenuItem from "./components/HomeSingleMenuItem/HomeSingleMenuItem";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData(dispatch)
    }, [])

    return (
        <div className="w-100 vh-100  row align-items-center">
            <HomeSingleMenuItem />
        </div>
    )
}

export default Home; 