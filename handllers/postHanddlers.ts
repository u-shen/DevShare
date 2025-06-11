const allPosts: any[] = [];

export const getAllPosts = (req, res) => {
  res.send(allPosts);
};

export const createPost = (req, res) => {
  const { body } = req;
  allPosts.push(body);
  res.end();
};
