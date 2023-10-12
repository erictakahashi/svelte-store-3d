import { expect, test } from '@playwright/test';
import { products } from '../../products';

test.beforeEach(async ({ page }) => {
	await page.goto('/products');
});

test.describe('products page', () => {
	test('products page has expected h1', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
	});

	test('clicking a product link navigates to a product page', async ({ page }) => {
		await page.getByText('metal asdd').click();
		await page.waitForURL('/products/**');
		await expect(page).toHaveURL(/products\/.*/);
	});

	test('links to all products are listed', async ({ page }) => {
		await expect(page.locator('main').getByRole('link')).toHaveCount(products.length);
	});
});
