import { expect, test } from '@chromatic-com/playwright';

test(`Homepage`, async ({ page }) => {
	await page.goto(`http://localhost:3000`);

	const heading = page.getByRole(`heading`);

	await expect(heading).toHaveText(`Count:`);
});
