import { useCallback, useEffect, useRef } from 'react';

/**
 * 
 * @param callback 
 * 
 * @param {delayTimeout} - How long you want the delay to wait until callback is going to run 
 * @returns 
 */
const useTimeOut = (callback: Function, delayTimeout: number) => {
    const callbackRef = useRef(callBack)
    const timeoutRef = useRef();

    useEffect(() => {
        callback.current = callback;

    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delayTimeout)
    }, [delayTimeout])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])


    useEffect(() => {
        set()
        return clear;
    }, [delayTimeout, clear, set])


    const resetTimeoutHandler = useCallback(() => {
        clear();
        set()
    }, [clear, set])

    return {resetTimeoutHandler, clear}
};

export default useTimeOut;
