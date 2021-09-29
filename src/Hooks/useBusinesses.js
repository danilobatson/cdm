import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [businesses, setBusinesses] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
  	const [name, setName] = useState(' ');


	const searchApi = async () => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: name,
					location: 'Anaheim',
				},
			});
			console.log(response.data);
			setBusinesses(response.data.businesses);
		} catch (err) {
			console.log(err);
			setErrorMessage('Something went wrong');
		}
	};

	useEffect(() => {
		searchApi('Sushi');
	}, []);

return [searchApi, businesses, errorMessage, name, setName];
}
