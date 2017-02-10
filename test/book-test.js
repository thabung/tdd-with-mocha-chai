process.env.NODE_ENV = 'dev';


let Book = require('../app/models/book');

/*setting up mockGoose*/ 




////

let chai = require('chai');
let chaiHttp = require('chai-http');
var server;
let routes = require('../app/routes/route');
//initial mock data

var Mongoose = require('mongoose').Mongoose;
var mongoose = new Mongoose();
var mockgoose = require('mockgoose');
let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {
    
    
    before(function (done) {
        mockgoose(mongoose).then(function () {
            mongoose.connect('mongodb://127.0.0.1:27017/test', function (err) {
//                server= require('../server');
                console.log("MOCK DONE#####");
                done(err);
                
            });
        });
    });
   
   
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
          
//            console.log(mongoose.Schema)
            let route = require('../app/routes/route')
            route.getBooks(chai.request,chai.response);
            done();
            /*
            chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
            */
      });
  });
  
//  describe('/POST book', () => {
//      it('it should not POST a book without pages field', (done) => {
//        let book = {
//            title: "The Lord of the Rings",
//            author: "J.R.R. Tolkien",
//            year: 1954
//        }
//        chai.request(server)
//            .post('/book')
//            .send(book)
//            .end((err, res) => {
//                res.should.have.status(200);
//                res.body.should.be.a('object');
//                res.body.should.have.property('errors');
//                res.body.errors.should.have.property('pages');
//                res.body.errors.pages.should.have.property('kind').eql('required');
//              done();
//            });
//      });
//      
//  });
});