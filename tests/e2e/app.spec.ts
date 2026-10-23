import { expect, test } from '@playwright/test';

test('mobile landing page toggles Myanmar translations and opens history', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Thai Driving License Practice' })).toBeVisible();

  const showMyanmar = page.getByRole('button', { name: 'Show Myanmar' });
  const categoryTranslation = page.getByText('လမ်းညွှန်ဆိုင်းဘုတ်များနှင့် လမ်းအမှတ်အသားများ');
  await expect(showMyanmar).toHaveAttribute('aria-pressed', 'false');
  await expect(categoryTranslation).toHaveCount(0);
  await showMyanmar.click();
  await expect(page.getByRole('button', { name: 'Hide Myanmar' })).toHaveAttribute('aria-pressed', 'true');
  await expect(categoryTranslation).toBeVisible();

  await page.getByRole('button', { name: 'History' }).click();
  await expect(page.getByRole('heading', { name: 'Practice Score History' })).toBeVisible();
});

test('mobile learner can navigate a quiz, submit an answer, view results, and save history', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start Practice (Instant Feedback)' }).click();

  await expect(page.getByText(/Question\s+1\s+of\s+\d+/)).toBeVisible();
  await page.getByTitle('Question Navigator').click();
  await expect(page.getByRole('dialog', { name: /Question Navigator/ })).toBeVisible();
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

test('timed practice shows a timer and confirms before final submission', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start Timed Practice (60m)' }).click();

  await expect(page.getByRole('timer', { name: /Time remaining:/ })).toBeVisible();
  await page.getByRole('button', { name: 'Finish Exam' }).click();
  const confirmation = page.getByRole('dialog', { name: 'Submit Exam Answers?' });
  await expect(confirmation).toBeVisible();
  await confirmation.getByRole('button', { name: 'Submit Exam' }).click();

  await expect(page.getByText(/Practice Target Reached|Keep Practicing/)).toBeVisible();
});

test('timed exam warns before leaving through the main navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start Timed Practice (60m)' }).click();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Leave this timed exam?');
    await dialog.dismiss();
  });
  await page.getByRole('button', { name: /Question Bank/ }).click();
  await expect(page.getByRole('timer', { name: /Time remaining:/ })).toBeVisible();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Your current answers will not be saved');
    await dialog.accept();
  });
  await page.getByRole('button', { name: /Question Bank/ }).click();
  await expect(page.getByRole('heading', { name: /Study All .* Exam Questions/ })).toBeVisible();
});
