import React, { useState } from 'react';
import useFetch from '../hooks/use-fetch.hook';

const Fetch = () => {
	const [id, setId] = useState(1);
	const { loading, error, value } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {}, [id]);

	return (
		<>
			<p>{id}</p>
			<button onClick={() => setId((prevId) => prevId + 1)}>Increment ID</button>
			<p>Loading: {loading.toString()}</p>
			<p>{JSON.stringify(error, null, 2)}</p>
			<p>{JSON.stringify(value, null, 2)}</p>
		</>
	);
};

export default Fetch;
