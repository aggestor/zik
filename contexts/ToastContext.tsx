"use client"
import  React from 'react';
declare type ToastType = {
    display?:boolean
    title?:string
    message ?: string,
    type?:"success"|"failure"|"normal"
}
type ToastContextType = {
    toastData?: ToastType
    setData?: (t: ToastType)=> void
}
const data :ToastContextType = {
    toastData : {
        title :"Lorem ipsum",
        message : "Error by lorem ipsum is just nothing but a text",
        display:true,
        type:"normal"
    }
}
export const ToastContext = React.createContext<ToastContextType>(data);

export const ToastProvider: React.FC<React.ReactNode | any> = ({ children }) => {
  const [toastData, setToastData] = React.useState<ToastType>();
  const setData = (t:ToastType) => {
    setToastData(t)
  };
  return <ToastContext.Provider value={{toastData,setData }}>{children}</ToastContext.Provider>;
};

export default ToastContext;