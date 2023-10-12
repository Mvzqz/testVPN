import {test, expect,} from '@playwright/test'

test('test vpn', async({ page }) => {

    await page.goto('https://www.whatismyip.com')

    const ipElements = await page.locator('.ip-info-line').all()
    for(const ipElement of ipElements){
        console.log(await ipElement.textContent())
    }

    await expect(page.locator('#geo')).toContainText('Guadalajara, JAL MX')
})