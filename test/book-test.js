var mongooseMock = require('./mong-mock'),
        proxyquire = require('proxyquire');
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
chai.should();

describe('User', function () {
    var Book;
    before(function (done) {
        Book = proxyquire('../app/models/book', {mongoose: mongooseMock});
        done();
    });
    it('Ensure Save is called', function (done) {
        var book = new Book({
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            year: 1954,
            pages: 1234
        });
        book.save(function(err,res) {
            chai.expect(res).to.eql(book);
            done();

        });
    }
    );
    
});