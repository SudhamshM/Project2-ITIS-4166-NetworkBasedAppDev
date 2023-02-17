const {DateTime} =  require('luxon');
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        title: 'Free Guy (2021)',
        details: "A bank teller discovers that he's \
        actually an NPC inside a brutal, open world video game",
        hostName: 'Sudhamsh Mondrati',
        category: 'Action',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
        .toLocaleString(DateTime.DATETIME_FULL.DATETIME_MED),
        endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
        .toLocaleString(DateTime.DATETIME_FULL.DATETIME_MED),
        image: 'free-guy.png'
    },
    {
        id: '2',
        title: 'Movie 2',
        details: "A second movie",
        hostName: 'Sudhamsh Mondrati',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 24, hour:7, minute: 30})
        .toLocaleString(DateTime.DATETIME_FULL.DATETIME_MED),
        category: 'Romance',
        endTime: DateTime.fromObject({year: 2022, month:2, day: 24, hour:9, minute: 30})
        .toLocaleString(DateTime.DATETIME_FULL.DATETIME_MED),
        image: 'movie.png'
    },
]

exports.find = function ()
{
    return events;
}