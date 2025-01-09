const { test, expect } = require('@playwright/test');
var userid;

test('Create the user details using POST request', async ({ request }) => {
    
   const response =  await request.post("https://reqres.in/api/users",
    {
     data:{"name": "alexalex warnor","job": "manager"},
     headers:{"Accept":"application/json"}});
     console.log(await response.json());
     expect(response.status()).toBe(201);
     console.log(response);

     var objUser = response.json();
     var userid = objUser.id;

    
  })