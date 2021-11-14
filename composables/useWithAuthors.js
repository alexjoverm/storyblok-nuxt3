export default (articles, authors) =>
  articles.map((article) => {
    if (typeof article.content.author === "object") return article;
    const author = authors.find((a) => a.uuid === article.content.author);
    return { ...article, content: { ...article.content, author } };
  });
