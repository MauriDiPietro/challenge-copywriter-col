import chai from 'chai';
const expect = chai.expect;
const should = chai.should();
import chaiHttp from 'chai-http';
import app from '../server.js';

chai.use(chaiHttp);

describe('API test', () => {

    it('should return the reverse string', (done) => {
        let string = {text: 'test'}
        chai.request(app)
            .get('/iecho')
            .query({text: 'test'})
            .send(string)
            .end((err, res) => {
                
                res.should.have.status(200); 
                res.body.should.be.a('object');  
                done()
                   
            });
    });

    
});