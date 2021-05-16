const db = require("../models");
const axios = require("axios");

module.exports = {
  // function to use API from backend
  getApi: (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=meditation")
      .then((response) => res.json(response.data))
      .catch((err) => res.status(422).json(err));
  },
  // find all the books saved in the database
  findAll: (req, res) => {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // save a book to the database
  save: (req, res) => {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
