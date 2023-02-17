const express = require('express');
const router = express.Router();
const model = require('../models/meetupEvent')

// /GET stories: send all stories to user

exports.index = (req, res) =>
{
    const stories = model.find();
    res.render('./event/index');
};

exports.new = (req, res) =>
{
    res.render('./event/new');
};

exports.create = (req, res) =>
{
    res.render('./event/new');
};

exports.show = (req, res) =>
{
    res.render('./event/new');
};

exports.edit = (req, res) =>
{
    res.render('./event/new');
};

exports.update = (req, res) =>
{
    res.render('./event/new');
};

exports.delete = (req, res) =>
{
    res.render('./event/new');
};