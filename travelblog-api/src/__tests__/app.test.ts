import request from "supertest";
import app from "../app";

describe("app", () => {
  it("health", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "up" });
  });
});
