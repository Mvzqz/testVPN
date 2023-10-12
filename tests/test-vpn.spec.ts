import {test, expect,} from '@playwright/test'

test('test vpn', async({ page }) => {

    await page.goto('https://whatismyipaddress.com/')

    const ipElements = await page.locator('.ip-address').all()
    for(const ipElement of ipElements){
        console.log(await ipElement.textContent())
    }

    const informationElements = await page.locator('.information').all()
    for(const informationElement of informationElements){
        console.log(await informationElement.textContent())
    }

    await expect(page.locator('.information').nth(3).locator('span').nth(1)).toHaveText('Brazil')
})