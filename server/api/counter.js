import { useBody } from "h3";

const counter = {};

export default async (req, res) => {
  const body = useBody(req);

  counter[body.path] = (counter[body.path] || 0) + 1;

  return {
    count: counter[body.path]
  };
};
