import axios from 'axios'
import React, { useEffect } from 'react'

const useGetMessages = () => {
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(``)
            } catch (error) {
                console.log(error);
                
            }
        }
    } ,[])
}

export default useGetMessages