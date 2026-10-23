import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
     await page.goto('https://www.saucedemo.com/'); 
})

test('TC_001' , async ({page}) => {
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

});

test('TC002', async({page}) => {
 await page.locator('#user-name').fill("Kapitharshana");
 await page.locator('#password').fill('123Abc##');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC003', async({page}) => {
   await page.locator('#user-name').fill("standard_user");
 await page.locator('#password').fill('123Abc##');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC004', async({page}) => {
 await page.locator('#user-name').fill("Kapi");
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC005', async({page}) => {
 await page.locator('#user-name').fill("");
 await page.locator('#password').fill("");
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC006', async({page}) => {
 await page.locator('#user-name').fill("standard_user");
 await page.locator('#password').fill('');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC007', async({page}) => {
   await page.locator('#user-name').fill('');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC_009' , async ({page}) => {
//login
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

//back move (playwright have built-in functionality)
await page.goBack();
await expect(page).toHaveURL('https://www.saucedemo.com/');

//brwser forward move
await page.goForward();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

