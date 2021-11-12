import React from 'react';
import useArray from '../hooks/use-array.hook';

const Array: React.FC = () => {
	const { array, set, pushHandler, removeHandler, filterHandler, updateHandler, clearHandler } = useArray([1, 2, 3, 4, 5, 6]);

	return (
		<>
			<p>{array.join(', ')}</p>
			<button onClick={() => pushHandler(7)}>Add 7</button>
			<button onClick={() => updateHandler(1, 9)}>Change second Element To 9</button>
			<button onClick={() => removeHandler(1)}>Remove second element</button>
			<button onClick={() => filterHandler((number) => number > 3)}> Keep the Number Less than 4</button>
			<button onClick={() => set([1, 2])}>Set to 1, 2</button>
			<button onClick={clearHandler}>Clear</button>
		</>
	);
};

export default Array;
