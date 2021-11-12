import React, { useState } from 'react';
import usePrevious from '../hooks/use-previous.hook';

const Previous: React.FC = () => {
	const [count, setCount] = useState<number>(0);
	const [name, setName] = useState<string>('John');
	const previousCount = usePrevious(count);
	return (
		<>
			<p>New Count:{count}</p>
			<p> previous Count:{previousCount}</p>
			<p>{name}</p>

			<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
			<button onClick={() => setName('Doe')}>Change Name</button>
		</>
	);
};

export default Previous;
