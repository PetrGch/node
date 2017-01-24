var util = require('util');

function phraseError(message) {
    this.message = message;
    Error.captureStackTrace(this);
}

util.inherits(phraseError, Error);
phraseError.prototype.name = 'phraseError';

function httpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this);
}

util.inherits(httpError, Error);
httpError.prototype.name = 'httpError';

var phrase = {
    "hello": "Hi",
    "world": "world!"
};

function getPhrase(name) {
    if (!phrase[name]) {
        throw new phraseError("there isn't such phrase");
    }

    return phrase[name];
}

function makePage(name) {
    if (name !== 'index.html') {
        throw new httpError(404, 'there isn\'t such page');
    }

    return util.format('%s %s', getPhrase("hello"), getPhrase('world'));
}


try {
    var page = makePage('index.htm');
    console.log(page);
} catch(e) {
    console.log(e)
    if (e instanceof httpError) {
        console.log(e.status, e.message);
    } else {
        console.log('Error %s\n message %s\n stack %s', e.name, e.message, e.stack);
    }
}
