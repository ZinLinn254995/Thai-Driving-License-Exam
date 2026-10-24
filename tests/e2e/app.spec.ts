import { expect, test } from '@playwright/test';

test('mobile landing page keeps Myanmar UI text visible independently of the question translation toggle and opens history', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Thai Driving License Practice' })).toBeVisible();

  const categoryTranslation = page.getByText('လမ်းညွှန်ဆိုင်းဘုတ်များနှင့် လမ်းအမှတ်အသားများ');
  const showMyanmar = page.getByRole('button', { name: 'Show Myanmar in questions' });
  await expect(showMyanmar).toHaveAttribute('aria-pressed', 'false');
  await expect(categoryTranslation).toBeVisible();

  await showMyanmar.click();
  const hideMyanmar = page.getByRole('button', { name: 'Hide Myanmar in questions' });
  await expect(hideMyanmar).toHaveAttribute('aria-pressed', 'true');
  await expect(categoryTranslation).toBeVisible();

  await hideMyanmar.click();
  await expect(page.getByRole('button', { name: 'Show Myanmar in questions' })).toHaveAttribute('aria-pressed', 'false');
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
  await expect(page.getByText(/Attempts/)).toBeVisible();
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

test('timed exam exit button confirms leaving and allows continuing safely', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start Timed Practice (60m)' }).click();

  await page.getByRole('button', { name: '← Exit' }).click();
  const confirmation = page.getByRole('dialog', { name: 'Leave this exam?' });
  await expect(confirmation).toBeVisible();
  await expect(confirmation).toContainText('Your current answers will be lost and this attempt will not be saved to history.');

  await confirmation.getByRole('button', { name: 'Continue Exam' }).click();
  await expect(confirmation).toHaveCount(0);
  await expect(page.getByRole('timer', { name: /Time remaining:/ })).toBeVisible();

  await page.getByRole('button', { name: '← Exit' }).click();
  await page.getByRole('dialog', { name: 'Leave this exam?' }).getByRole('button', { name: 'Leave Exam' }).click();
  await expect(page.getByRole('heading', { name: 'Thai Driving License Practice' })).toBeVisible();
  await expect(page.getByRole('timer', { name: /Time remaining:/ })).toHaveCount(0);
});

test('mobile learner can open a category card using native button controls', async ({ page }) => {
  await page.goto('/');

  const trafficSignsCard = page.getByRole('button', { name: 'Study Traffic Signs (117 questions)' });
  await expect(trafficSignsCard).toBeVisible();
  await trafficSignsCard.focus();
  await page.keyboard.press('Enter');

  await expect(page.getByRole('heading', { name: /Study All .* Exam Questions/ })).toBeVisible();
  const signsFilter = page.getByRole('button', { name: 'Signs (117)' });
  await expect(signsFilter).toBeVisible();
  await expect(signsFilter).toHaveAttribute('aria-pressed', 'true');
});
