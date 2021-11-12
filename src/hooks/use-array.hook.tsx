import { useState } from 'react';

const useArray = (defaultValue: any) => {
	const [array, setArray] = useState<Array<Object>>(defaultValue);

	const pushHandler = (element: Object) => {
		setArray((prevArray) => [ ...prevArray, element ]);
	};

	const filterHandler = (callback: () => void) => {
		setArray((element) => element.filter(callback));
	};

	const updateHandler = (index: number, newElement: Object) => {
		setArray((prevArray) => [...prevArray.slice(0, index), newElement, ...prevArray.slice(index + 1, prevArray.length - 1)]);
	};

	const removeHandler = (index: number) => {
		setArray((prevArray) => [...prevArray.slice(0, index), ...prevArray.slice(index + 1, prevArray.length - 1)]);
	};

	const clearHandler = () => {
		setArray((prevArray) => {
			return {
				...prevArray,
				prevArray: [],
			};
		});
	};

	return { array, set: setArray, pushHandler, filterHandler, updateHandler, removeHandler, clearHandler } as const;
};

export default useArray;
