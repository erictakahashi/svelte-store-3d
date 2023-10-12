export interface Variant {
	/** Unique variant ID */
	id?: number;
	/** Descriptive name of the variant */
	name: string;
}

export interface ColorVariant extends Variant {
	type: 'color';
	/** The Spline value of the variant's variable */
	value: number;
	/** Unprefixed tw colour class name */
	className: string;
}

export type Variants = ColorVariant;

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
	/** Product variants like colours, sizes etc */
	variants?: Variants[];
}

export const products: Product[] = [
	{
		id: 'xIytq8jNEa6VkxQf',
		name: 'Metal Bottles',
		background: '#D2C6BD',
		price: 79,
		variants: [
			{
				type: 'color',
				name: 'Black',
				value: 0,
				className: 'black'
			},
			{
				type: 'color',
				name: 'Red',
				value: 1,
				className: 'red-600'
			},
			{
				type: 'color',
				name: 'Blue',
				value: 2,
				className: 'blue-700'
			}
		]
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
