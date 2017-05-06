import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];

            expect(h1.innerHTML).to.equal('Hello World!');

            // When you're doing an async test you need to call "done()" so Mocha knows 
            // that it's safe to evaluate whether you expect is true or false
            done();
            window.close();
        });
    });
});