'use strict';

const got = require('got');
const validUrl = require('valid-url').isUri;

module.exports = function (imageUrl) {
    if (!validUrl(imageUrl)) {
        return Promise.reject(new Error('A valid url is required.'));
    }

    return got.post('https://www.what-dog.net/Home/Analyze', {
        query: {
            isTest: 'False',
            version: '001',
            faceUrl: imageUrl,
            faceName: imageUrl
        },
        json: true
    }).then(response => {
        const whatDog = JSON.parse(response.body);
        return {
            isDog: whatDog.IsDog,
            breed: whatDog.BreedName,
            about: whatDog.Keywords
        };
    }).catch(err => {
        throw new Error(err);
    });
};
