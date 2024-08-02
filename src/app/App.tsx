import { type FC, useState } from 'react';

import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';

export const App: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Button type='primary' onClick={() => setCount(prev => prev + 1)}>
				Click me
			</Button>

			<h1 style={{ display: `flex`, alignItems: `center`, gap: 16 }}>
				Count: <Input value={count} readOnly />
			</h1>
		</div>
	);
};
