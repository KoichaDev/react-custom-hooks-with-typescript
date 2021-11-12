import React, { useState } from 'react';
import useUpdateEffect from '../hooks/use-update-effect.hook';

const UseUpdateEffect: React.FC = () => {
	const [countNumber, setCountNumber] = useState<number>(10);

	useUpdateEffect(() => alert(countNumber), [countNumber]);

	const onClickHandler = () => {
		setCountNumber((count) => count + 1);
	};

	return (
		<>
			<div>{countNumber}</div>
			<button onClick={onClickHandler}>Increment</button>
		</>
	);
};

export default UseUpdateEffect;
