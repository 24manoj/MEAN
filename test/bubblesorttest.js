var assert=require('chai').assert;
var should=require('chai').should;
var arr=require('E://MEAN//Algo//bubblesort').arr;
var a=require('E://MEAN//Algo//bubblesort').a;
describe("Binary Search",function(){
    it("Array should not be null",function(){
        assert.isNotEmpty(arr);
    })
    it("output cant be null",function(){
        assert.isNotNull(a);
    })
    it("Array contains sorted array",function(){
        assert.includeDeepOrderedMembers(a,arr);
    })
})