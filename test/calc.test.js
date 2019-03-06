var expect = chai.expect;

describe('面积计算功能测试',function(){
  it("宽是10,高是20的矩形，面积是200",function(){
    var rect=rectangle();
    expect(rect.area(10,20)).to.be.equal(200);
  });
});
