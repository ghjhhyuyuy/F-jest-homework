import axios from "axios";
import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({ data: {} });
    const result = register(1, "fake password");
    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const result = register("fake username", "fake password");
    await expect(result).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
