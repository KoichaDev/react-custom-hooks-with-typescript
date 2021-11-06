import { useState } from 'react';
import useTimeOut from '../hooks/use-timeout.hook';
const TimeOut = () => {
	const [count, setCount] = useState<number>(10);
	const { clear, reset } = useTimeOut(() => setCount(0), 1000);

	return (
		<>
			{count}
			<button onClick={() => setCount((count) => count + 1)}>Increment</button>
			<button onClick={clear}>Clear Timeout</button>
			<button onClick={reset}>Reset Timeout</button>
		</>
	);
};

export default TimeOut;
