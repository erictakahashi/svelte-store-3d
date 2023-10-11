export interface Product {
	/**
	 * UUID to the Spline export
	 * */
	id: string;
	/** Name used as the title of the product */
	name: string;
	/** Optional description */
	description?: string;
	/** Product price in local currency */
	price?: number;
	/** Background colour when shown in a card */
	background?: string;
}

export const products: Product[] = [
	{
		id: 'xIytq8jNEa6VkxQf',
		name: 'Metal Bottles',
		background: '#D2C6BD',
		price: 79
	},
	{
		id: 'L4F6GdTEyPyesg16',
		name: 'Organic Bottle',
		price: 99
	},
	{
		id: 'nIlLpfHATL3WB5Aj',
		name: 'Good Pills',
		price: 119
	},
	{
		id: 'MVRdERpqcODbyCSV',
		name: 'Designer Tap',
		background: '#D2C6BD',
		price: 299
	}
];
