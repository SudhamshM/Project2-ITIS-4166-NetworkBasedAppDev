const express = require('express');
const router = express.Router();
const model = require('../models/meetupEvent')

// /GET stories: send all stories to user

exports.index = (req, res) =>
{
    const stories = model.find();
    res.render('./event/index');
};