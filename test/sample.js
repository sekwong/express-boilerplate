import 'babel-polyfill';
import facets from '../dist/models/facets.js';
const chai = require('chai');
chai.should();

describe('#facets test', function () {
    it('should be empty array', function () {
        facets.should.have.lengthOf(0);
    });
});