import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { products } from '../../../products.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const product = products.find((product) => product.id === params.slug);

	if (product) {
		return product;
	}

	throw error(404, 'Not found');
}

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;
