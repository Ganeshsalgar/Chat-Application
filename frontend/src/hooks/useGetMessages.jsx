import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlic';

const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`)

                console.log(res);
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchMessage();
    } ,[selectedUser])
}

export default useGetMessages