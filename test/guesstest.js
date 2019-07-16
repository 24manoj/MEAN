var assert=require('chai').assert;

var n=require('E://MEAN//Algo//guess').n;
describe("Guessing",function(){
    it("N is not null",function(){
        assert.isNotNaN(n)
    })
    it("N is a power of two",function(){
        var m=n;
        while(m%2==0){
            m=m/2;
        }
        assert.equal(m,1);
    })
})