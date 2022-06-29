import React from "react";
import axios from "axios";

function useFetch(url: string) {
    const [data, setData] = React.useState([]);
    const [load, setLoad] = React.useState(true);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        axios(url)
            .then((res) => setData(res.data))
            .then((res) => setLoad(false))
            .catch(setError);
    }, [url]);

    return {
    	data,
    	load,
    	error
    }
}


export default useFetch;
