import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import request from "supertest";
import "../../utils/db";
import app from "../../app";

declare var global: {
  __MONGO_URI__: string | undefined;
  __MONGO_DB_NAME__: string | undefined;
};

describe("User", () => {
  let connection;
  let db;

  beforeAll(async () => {
    const mongoUri = global.__MONGO_URI__;
    const dbName = mongoUri.split("/").pop();

    connection = await MongoClient.connect(mongoUri, {
      useNewUrlParser: true,
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await connection.close();
    await mongoose.connection.close();
    await db.close();
  });

  it("should insert a user to the database", async () => {
    const mockUser = { email: "test@test.com", password: "abc" };
    const response = await request(app)
      .post("/users/signup")
      .set("Content-Type", "application/json")
      .send(mockUser);

    expect(response.body).toEqual({ email: mockUser.email });
    const users = db.collection("users");
    const insertedUser = await users.findOne({ email: mockUser.email });
    expect(insertedUser).toMatchObject(mockUser);
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = { _id: "some-user-id", name: "John" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: "some-user-id" });
    expect(insertedUser).toEqual(mockUser);
  });
});
