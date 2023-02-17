const express = require('express');
const router = express.Router();

// /GET index: homepage of MM

exports.index = (req, res) =>
{
    const stories = model.find();
    res.render('./index');
};

// /GET index: homepage of MM

exports.index = (req, res) =>
{
    const stories = model.find();
    res.render('./');
};