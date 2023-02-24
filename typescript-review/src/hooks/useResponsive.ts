/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface IUseResponsiveProps{
    breakpoint: number;
}

export default function useResponsive(props :IUseResponsiveProps){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth <= props.breakpoint){
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener('resize', handleResize);

        if(window.innerWidth <= props.breakpoint){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return { isMobile };
}