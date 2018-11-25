const files = require('./read-files')
const expect = require('chai').expect
// mock
const fs = require('fs')
const sinon = require('sinon')

describe('reading directory', () => {
    afterEach(done => {
        fs.readdir.restore()
        done()
    })
    it('should read a directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, callback) => {
            callback(null, ['file1.txt'])
        })
        const path = './'
        return files.readDir(path).then(list => {
            expect(list.length).to.equal(1)
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })
    })
    it('should throw error on reading a directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, callback) => {
            callback('error')
        })
        const path = './'
        return files.readDir(path).catch(err => {
            expect(err).to.equal('error')
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })
    })
})

