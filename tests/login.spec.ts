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

//simulate an offline network condition.
test('TC_008', async({page,context}) => {
     await context.setOffline(true);

await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/'); //negative case check
})


//browser options
test('TC_009' , async ({page}) => {
//login
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

//back move (playwright have built-in functionality)
await page.goBack();
await expect(page).toHaveURL('https://www.saucedemo.com/');

//browser forward move
await page.goForward();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});


test('TC_010' , async ({page}) => {
//login
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

//click hamburger menu
//await page.getByRole('button', { name: 'Open Menu' }).click(); // this is was used from the alt atrrtibute's name.
await page.locator('#react-burger-menu-btn').click();

//logout
await page.locator('#logout_sidebar_link').click();
await expect(page).toHaveURL('https://www.saucedemo.com/'); 


//back move (playwright have built-in functionality)
await page.goBack();
await expect(page).toHaveURL('https://www.saucedemo.com/'); //positive case
//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');  //check negative case
});


test('TC_011' , async ({page}) => {
//login
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

//click hamburger menu
await page.locator('#react-burger-menu-btn').click();

//logout
await page.locator('#logout_sidebar_link').click();
await expect(page).toHaveURL('https://www.saucedemo.com/'); 

//back move (playwright have built-in functionality)
await page.goBack();
await expect(page).toHaveURL('https://www.saucedemo.com/'); 

//browser forward move
await page.goForward();
await expect(page).toHaveURL('https://www.saucedemo.com/');  //postive case
//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //negative case

});


test('TC_012', async({page}) =>{
 await page.goto('https://www.saucedemo.com/inventory-item.html?id=4');
 //await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4'); negative case
 await expect(page).toHaveURL('https://www.saucedemo.com/');
 await expect(page.locator('#login-button')).toBeVisible();

})

test('TC_013', async({page})=>{
     await page.locator('#password').fill('secret_sauce');
     await expect(page.locator('#password')).toHaveAttribute('type','password');
})

test('TC_014' ,async({page})=> {
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_saucE');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC_015' ,async({page})=> {
 await page.locator('#user-name').fill('stAndard_usEr');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC_016' ,async({page})=> {
 await page.locator('#user-name').fill(' standard_user ');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
 await expect(page.locator('[data-test="error"]')).toBeVisible();

 const errormessage= await page.locator('[data-test="error"]').textContent();
 console.log(errormessage);
})

test('TC_017' , async ({page}) => {
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");

await page.keyboard.press('Enter');
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

});

//use built-in method for double click 
test('TC_018' , async ({page}) => {
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').dblclick();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

});

//special users 
//use locked outuser
test('TC_019' , async ({page}) => {
await page.locator('#user-name').fill("locked_out_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();

await expect(page.locator('[data-test="error"]')).toBeVisible();
await expect(page.locator('[data-test="error"]')).toHaveText(' Epic sadface: Sorry, this user has been locked out.');
 
});

//Problem user
test('TC_021' , async ({page}) => {
await page.locator('#user-name').fill("problem_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').dblclick();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

});

test('TC0022', async({page}) => {
 await page.locator('#user-name').fill("");
 await page.locator('#password').fill("");
 await page.locator('#login-button').click();
 
 const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();

  const errormessage = await errorMessage.textContent();
  console.log(errormessage);

  await page.locator('[data-test="error-button"]').click();

  await expect(errorMessage).toBeHidden();
});

