var util = require('util');

var phrases = {
  'hello': 'hi',
  'world': 'world'
}

function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function getPhrases(name) {
  if (!phrases[name]) {
    throw new PhraseError('There isn\'t such phrases us ' + name);
  }

  return phrases[name];
}

function HttpError(status, message) {
  this.status = status;
  this.message = message;
  Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function makePage(url) {
  if (url != 'index.html') {
    throw new HttpError(404, 'There isn\'t such page');
  }

  return util.format('%s %s!!!', getPhrases('*hello'), getPhrases('world'));
}

try {
  var page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.log('Error %s\n message: %s\n stack: %s', e.name, e.message, e.stack);
  }
}
