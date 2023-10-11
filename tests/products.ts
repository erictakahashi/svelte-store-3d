import { expect, test } from '@playwright/test';

test('products page has expected h1', async ({ page }) => {
	await page.goto('/products');
	await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
});
