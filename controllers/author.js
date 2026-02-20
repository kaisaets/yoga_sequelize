const models = require("../models");

const getAuthorArticles = async (req, res) => {
  try {
    const authorId = req.params.id;

    const author = await models.Author.findByPk(authorId, {
      include: [
        {
          model: models.Article,
          as: "Articles",
        },
      ],
    });

    if (!author) {
      return res.status(404).send("Author not found");
    }

    res.json(author);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = { getAuthorArticles };
