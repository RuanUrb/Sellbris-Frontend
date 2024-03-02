import { API_URL } from '@/api/api';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

//@ts-ignore
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

    useEffect(()=>{
        const checkAuth = async () => {
            try {
                 await axios.get(`${API_URL}auth/`, {
                  withCredentials: true
                }).then((res)=>{
                  const isAuth = res.data.isAuth
                  console.log(isAuth)
                  setAuthenticated(isAuth)
                })
                
              } catch (error) {
                console.error('Error fetching data:', error);
              }
              finally{
                setAuthLoading(false)
              }
          };
          checkAuth();

    }, []);

  return (
    <AuthContext.Provider value={{ authenticated, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};