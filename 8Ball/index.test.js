const eightBall = require('./index');
const rl = require('../Util/')
const sinon = require("sinon");
const spy = sinon.spy(rl, 'method');

describe('Test 8 Ball', function () {
    it('should return a string', function () {
        eightBall
        expect(spy.calledOnce)
    });
});
