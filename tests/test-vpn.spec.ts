import {test, expect,} from '@playwright/test'
    test(`test 1`, async({ page }) => {
        test.slow()
        await page.goto('https://www.whatismyip.com')

        const ipElements = await page.locator('.ip-info-line').all()
        for(const ipElement of ipElements){
            console.log(await ipElement.textContent())
        }

        await expect(page.locator('#geo')).toContainText('US')
    })




