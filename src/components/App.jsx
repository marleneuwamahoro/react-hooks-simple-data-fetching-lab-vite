import React, { useEffect, useState } from 'react';

export default function App() {
	const [imageUrl, setImageUrl] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchDog = async () => {
		setLoading(true);
		try {
			const res = await fetch('https://dog.ceo/api/breeds/image/random');
			const data = await res.json();
			setImageUrl(data.message);
		} catch (err) {
			console.error(err);
			setImageUrl(null);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		void fetchDog();
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<img src={imageUrl} alt="A Random Dog" />
					<button onClick={fetchDog}>New Dog</button>
				</>
			)}
		</div>
	);
}
