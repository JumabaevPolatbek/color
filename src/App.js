import React from 'react';
import './index.css';

function App() {
	const [color, setColor] = React.useState('#a2ccb6');
	React.useEffect(() => {
		document.querySelector('body').style.backgroundColor = color;
		var sea = '#a2ccb6',
			sand = '#fceeb5',
			peach = '#ee786e';
		window.addEventListener('change', (e) => {
			switch (e.target.value) {
				case 'Sea':
					setColor(sea);
					document.querySelector('body').style.backgroundColor =
						color;
					break;
				case 'Sand':
					setColor(sand);
					document.querySelector('body').style.backgroundColor =
						color;
					break;
				case 'Peach':
					setColor(peach);
					document.querySelector('body').style.backgroundColor =
						color;
					break;
				default:
					document.querySelector('body').style.backgroundColor = sea;
					break;
			}
		});
	}, [color]);
	return (
		<>
			<select defaultValue="Sea">
				<option value="Sea">Sea</option>
				<option value="Sand">Sand</option>
				<option value="Peach">Peach</option>
			</select>
			<p>{color}</p>
		</>
	);
}
export default App;
