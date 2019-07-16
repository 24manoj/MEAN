var should=require('chai').should;
var a=require('E://MEAN//Algo//binary').a;
var key=require('E://MEAN//Algo//binary').s;
describe("Binary Search",function(){
    it("Array should not be null",function(){
        a.should.not.be.empty;
    })
    it("key cant be null",function(){
        key.should.not.be.NaN;
    })
    it("key found",function(){
    a.should.contain(key);
    })
})