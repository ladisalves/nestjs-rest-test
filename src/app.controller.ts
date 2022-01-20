import { Controller, Get, Post } from "@nestjs/common";

const fakeEntity = {
  id: "12345",
  name: "test name",
};

const getResponseTimeout = (timeout) =>
  timeout || Math.floor(Math.random() * 290) + 10;

const fakeResponse = async (timeout) => {
  const fakeTimeout = getResponseTimeout(timeout);
  console.log(fakeTimeout);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, fakeTimeout);
  });

  return JSON.stringify(fakeEntity);
};

@Controller()
export class AppController {
  @Get()
  async resp(): Promise<string> {
    return fakeResponse(1);
  }

  @Get()
  @Post()
  async benchmark(): Promise<string> {
    return "OK";
  }
}
