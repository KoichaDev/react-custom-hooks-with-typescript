import React, { useEffect, useRef } from 'react';

const useUpdateEffect = (callback: any, useEffectDependencies: number) => {
    // Checking if this is the first render
    const firstRenderRef = useRef<boolean>(true);

	useEffect(() => {
        // If it's first render, then we don't want to execute the code
        if(firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback;
    }, [useEffectDependencies]);

    return callback() as Function;
};

export default useUpdateEffect;
