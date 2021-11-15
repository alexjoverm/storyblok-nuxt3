import { useQuery } from "h3";

const countMap = {};

export default async (req, res) => {
  const query = useQuery(req);

  countMap[query.path] = (countMap[query.path] || 0) + 1;

  console.log(countMap);
  return {
    count: countMap[query.path]
  };
  return {};
};
