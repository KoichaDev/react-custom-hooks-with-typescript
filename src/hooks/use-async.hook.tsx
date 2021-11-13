import { useState, useEffect, useCallback } from 'react';

const useAsync = (callback: any, dependencies = []) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callBackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
        .then(setValue)
        .catch(setError)
        .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callBackMemoized()
    }, [callBackMemoized])

	return {loading, error, value};
};

export default useAsync;
