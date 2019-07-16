var should=require('chai').should;
var s1=require('E://MEAN//Algo//anagram').s1;
var s2=require('E://MEAN//Algo//anagram').s2;
describe("Anagram Prgrm",function(){
    it("String are not null",function(){
        s1.should.not.be.null;
        s2.should.not.be.null;
    });
    it("String are anagram",function(){
        s1.should.contains.ordered.members(s2);
        
    });
})