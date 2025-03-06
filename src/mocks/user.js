export default [
  {
    url: "/api/register",
    method: "post",
    response: () => ({
      code: 200,
      data: { message: "success" },
    }),
  },
  {
    url: "/api/login",
    method: "post",
    response: () => ({
      code: 200,
      data: { token: "mock-token" },
    }),
  },
];
