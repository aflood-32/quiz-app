const jsonToBase64 = (object: unknown) => {
  const json = JSON.stringify(object);
  return Buffer.from(json).toString("base64");
};

function base64ToJson<T>(base64String: string): T {
  const json = Buffer.from(base64String, "base64").toString();
  return JSON.parse(json);
}

export { jsonToBase64, base64ToJson };
