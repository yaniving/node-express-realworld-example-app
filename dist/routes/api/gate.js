'use strict';

var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');
var axios = require('axios');

var SERVICE_BASE_URL = 'http://yad2yad.online:4000';
router.get('/users', auth.optional, function (req, res, next) {
    return axios.get(SERVICE_BASE_URL + '/users').then(function (response) {
        return res.json(response.data);
    }).catch(function (error) {
        console.log(error);
    });
});

router.get('/projects', auth.optional, function (req, res, next) {
    return axios.get(SERVICE_BASE_URL + '/projects').then(function (response) {
        return res.json(response.data);
    }).catch(function (error) {
        console.log(error);
    });
});

router.get('/projects/:project', auth.optional, function (req, res, next) {
    if (req.params.project) {
        return axios.get(SERVICE_BASE_URL + '/projects/' + req.params.project).then(function (response) {
            return res.json(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    } else {
        return res.json({ response: 'error' });
    }
});

http: //yad2yad.online:4000/projects


module.exports = router;