import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server.js'
// eslint-disable-next-line no-unused-vars
const expect = chai.expect
// eslint-disable-next-line no-unused-vars
const should = chai.should()

chai.use(chaiHttp)

// eslint-disable-next-line no-undef
describe('API test', () => {
  // eslint-disable-next-line no-undef
  it('should return the reverse string', (done) => {
    const string = { text: 'test' }
    chai.request(app)
      .get('/iecho')
      .query({ text: 'test' })
      .send(string)
      .end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
})
