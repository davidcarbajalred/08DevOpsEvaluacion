const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/ ", () => {
  test(async () => {
    const response = await request.get(__dirname + "/public/index.html");
    const body = JSON.parse(response.text);

    expectCookies(response.status).toBe(200);
    expext(body.message).toBe("Index");
  });
});
