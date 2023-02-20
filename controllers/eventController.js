const express = require('express');
const router = express.Router();
const model = require('../models/meetupEvent')

// /GET stories: send all stories to user

exports.index = (req, res) =>
{
    let categoryStories = {action: model.findByGenre('Action'), romance: model.findByGenre('Romance')}
    res.render('./event/index', {stories: categoryStories});
};

exports.new = (req, res) =>
{
    res.render('./event/new');
};

exports.create = (req, res) =>
{
    let event = req.body;
    console.log(event);
    model.save(event);
    res.redirect('/events')
};

exports.show = (req, res, next) =>
{
    let id = req.params.id;
    let event = model.findByid(id);
    if (event)
    {
        res.render('./event/event', {event})
    }
    else
    {
        let err = new Error("Cannot find event with id " + id);
        err.status = 404;
        next(err);
    }
    
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