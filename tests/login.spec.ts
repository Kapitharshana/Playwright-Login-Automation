import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
     await page.goto('https://www.saucedemo.com/'); 
})

test('TC_001' , async ({page}) => {
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();

});

test('TC002', async({page}) => {
 await page.locator('#user-name').fill("Kapitharshana");
 await page.locator('#password').fill('123Abc##');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

