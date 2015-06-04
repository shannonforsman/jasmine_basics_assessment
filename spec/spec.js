var myCode = require('./../grader.js');

describe('#letterGrader', function() {
  it('takes a test score and returns the equivalent letter grade', function() {
    expect(myCode.letterGrader(61)).toEqual("D-");
    expect(myCode.letterGrader(75)).toEqual("C");
    expect(myCode.letterGrader(100)).toEqual("A+");
    expect(myCode.letterGrader(0)).toEqual("F");
    expect(myCode.letterGrader(60)).toEqual("D-");
    expect(myCode.letterGrader(85)).toEqual("B");
  });
});
describe('#average', function() {
  it('takes an array of test scores and returns the average score', function() {
    expect(myCode.average([2,2,2,2])).toEqual(2);
    expect(myCode.average([90, 95, 87, 60])).toEqual(83);
    expect(myCode.average([0,0])).toEqual(0);
  });
});
describe('#median', function() {
  it('takes an array of test scores and calculates the median score', function() {
    expect(myCode.median([1,2,3,4])).toEqual(2.5);
    expect(myCode.median([4,2,1,3])).toEqual(2.5);
    expect(myCode.median([52,79,80,86,94])).toEqual(80);
    expect(myCode.median([79,80,52,94,86])).toEqual(80);
    expect(myCode.median([90])).toEqual(90);

  });
});
describe('#mode', function() {
  it('takes an array of test scores and calculates the median score', function() {

    expect(myCode.mode([2,2,2,2,2])).toEqual([2]);
    expect(myCode.mode([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual([92]);
    expect(myCode.mode([0,0,0])).toEqual([0]);
    expect(myCode.mode([99,"88",88, "62", 50])).toEqual([88]);
    expect(myCode.mode([99,99,88,88])).toEqual([88,99]);
    expect(myCode.mode([83, 78, 78,78,81, 81, 90, 90, 90, 81])).toEqual([78, 81, 90]);

  });
});
