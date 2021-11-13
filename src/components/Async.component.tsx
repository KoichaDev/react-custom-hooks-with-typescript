import React from 'react'
import useAsync from '../hooks/use-async.hook'

const Async: React.FC = () => {
    const {loading, error, value} = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true; 

            setTimeout(() => {
                success ? resolve('hi') : reject('Error')
            }, 1000)
        })
    })

    return (
        <>
            <p>Loading: {loading.toString()}</p>   
            <p>{error}</p>
            <p>{value}</p>
        </>
    )
}

export default Async
