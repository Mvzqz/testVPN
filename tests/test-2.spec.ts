import {test, expect,} from '@playwright/test'

test.afterAll(async()=>{
const users = ["user1", user2]    
console.log('RUNING AFTER ALL')
  try{
    fs.writeFileSync('./utils/create-users/output/users.json', JSON.stringify(users))
  }
  catch(error){
    console.error('Error writing to the file:', error);
  }
  
})


    test(`test vpn2`, async({ page }) => {
        test.slow()
        await page.goto('https://www.whatismyip.com')

        const ipElements = await page.locator('.ip-info-line').all()
        for(const ipElement of ipElements){
            console.log(await ipElement.textContent())
        }

        await expect(page.locator('#geo')).toContainText('US')
    })




