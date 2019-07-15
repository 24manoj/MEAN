var except=require('chai').expect;
var a=require('E://MEAN//Algo//insertionsort').a;
var b=require('E://MEAN//Algo//insertionsort').b;
var n=require('E://MEAN//Algo//insertionsort').n;
describe("Check array is sorted or not",function(){
    it("Array has sorted values",function(){
        except(b).to.have.ordered.members(a);
    });
    it("Array should not be empty",function(){
    except(a).not.to.be.empty;
    });
    it("Array size not to take zero value",function(){
except(n).to.not.have.lessThan(1);
   })
})