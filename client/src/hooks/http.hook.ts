import { useCallback, useState } from "react";

const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const httpRequest = async (url : string, method = "GET", body = null, headers = {"Content-type": "application/json"})=>{

        setLoading(true);
        setError(false);
        try{
            const response = headers ? await fetch(url, {method, headers, body}) : await fetch(url, {method, body});

            if(response.ok){
                setLoading(false);
                return response.json();
            } else {
                setLoading(false);
                throw new Error("Couldn`t fetch!")
            }
        } catch(e){
            setError(true);
            console.error(e);
        }

    }

    return {loading, error, httpRequest}

}

export default useHttp;