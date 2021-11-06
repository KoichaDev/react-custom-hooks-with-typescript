import useToggle from "../hooks/use-toggle.hook";
const ToggleCompleted = () => {
    const [toggleValue, toggleValueHandler] = useToggle(false);

	return (
		<>
			<div>{toggleValue.toString()}</div>
			<button onClick={toggleValueHandler}>Toggle</button>
			<button onClick={() => toggleValueHandler(true)}>Make True</button>
			<button onClick={() => toggleValueHandler(false)}>Make False</button>
		</>
	);
};

export default ToggleCompleted;
