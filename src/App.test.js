import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

describe('App', () => {
	let wrapper;

	afterEach(rtl.cleanup);
	beforeEach(() => {
		wrapper = rtl.render(<App />);
	});

	it('shows the name with the api data', async () => {
		const text = await wrapper.findByText('Select a season');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});
});
