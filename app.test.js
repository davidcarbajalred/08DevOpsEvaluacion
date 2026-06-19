const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/test endpoint", () => {
  test("Debe devolver'index.html'", async () => {
    const response = await request.get(__dirname + "/public/index.html");
    const body = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(body.message).toBe("Index");
  });

  test("Debe devolver 'contact.html'", async () => {
    const reponse = await request.get(__dirname + "/public/contact.html");
    const body = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(body.message).toBe("Contact");
  });

  test("Debe devolver error", async () => {
    const response = await request.get(__dirname + "/any-public");
    const body = JSON.parse(response.text);

    expect(response.status).toBe(404);
    expect(body.message).toBe("Incorrect route or params");
  });
});
