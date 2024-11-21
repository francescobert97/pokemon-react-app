import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/thunk";
import styles from './Home.module.css'
import HomeSingleMenuItem from "./components/HomeSingleMenuItem/HomeSingleMenuItem";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())

    }, [])

    return (
        <div className="d-flex align-items-center">
            <HomeSingleMenuItem />
        </div>
    )
}

export default Home; 