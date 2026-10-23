import { expect, test } from '@playwright/test';

test('mobile landing page toggles Myanmar translations and opens history', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Thai Driving License Practice' })).toBeVisible();

  const showMyanmar = page.getByRole('button', { name: 'Show Myanmar' });
  await expect(showMyanmar).toHaveAttribute('aria-pressed', 'false');
  await showMyanmar.click();
  await expect(page.getByRole('button', { name: 'Hide Myanmar' })).toHaveAttribute('aria-pressed', 'true');

  await page.getByRole('button', { name: 'History' }).click();
  await expect(page.getByRole('heading', { name: 'Practice Score History' })).toBeVisible();
});

test('mobile learner can navigate a quiz, submit an answer, view results, and save history', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start Practice (Instant Feedback)' }).click();

  await expect(page.getByText(/Question\s+1\s+of\s+\d+/)).toBeVisible();
  await page.getByTitle('Question Navigator').click();
  await expect(page.getByRole('dialog', { name: 'Question Navigator' })).toBeVisible();
  await page.getByRole('button', { name: /Go to question 50/ }).click();

  await expect(page.getByText(/Question\s+50\s+of\s+\d+/)).toBeVisible();
  await page.keyboard.press('1');
  const viewResults = page.getByRole('button', { name: 'View Results' });
  await expect(viewResults).toBeEnabled();
  await viewResults.click();

  await expect(page.getByText(/Practice Target Reached|Keep Practicing/)).toBeVisible();
  await page.getByRole('button', { name: 'History' }).click();
  await expect(page.getByRole('heading', { name: 'Practice Score History' })).toBeVisible();
  await expect(page.getByText('Attempts', { exact: true })).toBeVisible();
});
