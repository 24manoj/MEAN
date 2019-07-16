var assert=require('chai').assert;
var n=require("E://MEAN//Algo//merge").n;
var arr=require("E://MEAN//Algo//merge").arr;
var arr1=require("E://MEAN//Algo//merge").ar1;
describe("Merge sort",function(){
    it("N should not be lesser then 0",function(){
        assert.isAbove(n,0);
    });
    it("Array should not be empty",function(){
        assert.isNotEmpty(arr);
    });
    it("Array is sorted",function(){
        assert.includeOrderedMembers(arr,arr1);
    });
})