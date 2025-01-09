const { test, expect } = require('@playwright/test');



test('Get the user details using GET request', async ({ request }) => {
    
    const response = await request.get("https://fakerestapi.azurewebsites.net/api/v1/Authors/1");
    console.log(await response.json());
    expect(response.status()).toBe(200);
    
  });