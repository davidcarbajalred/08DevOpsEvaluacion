const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/ app.test", () => {
  test(async () => {
    const response = await request.get("/ index");
    const body = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(body.message).toBe("Index");
  });
});
