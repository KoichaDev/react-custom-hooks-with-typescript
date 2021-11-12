import { useState } from 'react';

/**
 *  1. Set your initiate state. Example useToggle(true), or useToggle(false)
 *  2. Toggling between true or false based on a button click for example with toggleValueHandler
 *
 * @param {defaultToggleValue} initialstate -  set true or false value
 * @return {(boolean|never)} boolean value, and 'never' for TypeScript will check if the value is boolean or nor
 */

const useToggle = (defaultToggleValue: boolean) => {
	const [toggleValue, setToggleValue] = useState<boolean>(defaultToggleValue);

	const toggleValueHandler = (value: unknown | boolean) => {
		setToggleValue((prevToggleValue) => (typeof value === 'boolean' ? value : !prevToggleValue));
	};

	return [toggleValue, toggleValueHandler] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
};

export default useToggle;
