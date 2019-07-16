var assert=require('chai').assert;
var amt=require('E://MEAN//Algo//vending').amt;
describe("Vending",function(){
    it("Amt greater then 0",function(){
        assert.isAbove(amt,0);
    })
})