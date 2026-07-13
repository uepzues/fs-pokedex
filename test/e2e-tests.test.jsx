import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })
  test('pokemon page can be navigated to', async ({ page }) => {
    await page.goto('')
    await page.click('text=ivysaur')
    await expect(page.locator('.pokemon-name')).toHaveText('ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
