import {useEffect} from "react";
import {instance} from "../../API/instance";

const Home = () => {

    useEffect(()=> {
        instance()
    }, [])

    return <>
        <h1>Home</h1>
    </>
}


export default Home