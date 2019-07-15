var assert=require('Chai').assert;

var should = require('chai').should();
var sum=require('E://MEAN//Functional//sumofthree');
describe("Simple",function(){
    it("N is a number ",function(){
var sa=sum;
 assert.typeOf(sa,"Number");

    });
    it("N Should not be less then 3",function(){
        
        sum.should.not.to.be.lessThan(3);
         
        
            });
});
