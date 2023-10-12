import { expect, test } from '@playwright/test';
import { products } from '../../../products';

test.describe('product page', () => {
	for (const product of products) {
		test(`${product.name} product page has expected h1`, async ({ page }) => {
			await page.goto(`/products/${product.id}`);
			await expect(page.getByRole('heading', { name: product.name })).toBeVisible();
		});
	}
});
