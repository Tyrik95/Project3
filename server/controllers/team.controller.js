const Team = require('../models/team.model');

module.exports.findAllTeams = (req, res) => {
    Team.find()
        .then((allTeams) => {
            res.json(allTeams)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findOneSingleTeam = (req, res) => {
    Team.findOne({ _id: req.params.id })
        .then(oneSingleTeam => {
            res.json(oneSingleTeam)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.findRandomTeam = (req, res) => {
            Team.find()
        .then((allTeams) => {
            res.json({ teams: allTeams[Math.floor(Math.random() * allTeams.length)]})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewTeam = (req, res) => {
    Team.create(req.body)
        .then(newlyCreatedTeam => {
            res.json( newlyCreatedTeam )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingTeam = (req, res) => {
    Team.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTeam => {
            res.json({ teamTeam: updatedTeam })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingTeam = (req, res) => {
    Team.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}