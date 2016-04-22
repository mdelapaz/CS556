var expect = chai.expect;
var should = chai.should();

describe('Button Clicked Tests', function() {

  before(function(){
    var disp = document.createElement("div");
    disp.setAttribute("id","display");
    var dispTxt = document.createTextNode("");
    disp.appendChild(dispTxt);
    var parent = document.getElementById("mocha");
    parent.insertBefore(disp, null);
  });

  after(function(){
    var disp = document.getElementById("display");
    disp.textContent = '';
  });

  it('Clear Clicked', function() {
    var display = document.getElementById("display");
    var ev = document.createEvent("MouseEvent");
    var clr = document.createElement("div");
    var clrTxt = document.createTextNode("C");
    display.textContent = "55"; // not cleared
    clr.appendChild(clrTxt);
    clr.addEventListener("click",buttonClicked);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    clr.dispatchEvent(ev);
    expect(display.textContent).to.equal('');
  });

  it('Operator Clicked', function(){
    var display = document.getElementById("display");
    var ev = document.createEvent("MouseEvent");
    var op = document.createElement("div");
    var opTxt = document.createTextNode("x");
    display.textContent = "55"; // not cleared
    op.appendChild(opTxt);
    op.addEventListener("click",buttonClicked);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    op.dispatchEvent(ev);
    expect(display.textContent).to.equal('55x');
  });

  it('Number Clicked', function(){
    var display = document.getElementById("display");
    var ev = document.createEvent("MouseEvent");
    var num = document.createElement("div");
    var numTxt = document.createTextNode("1");
    display.textContent = "55"; // not cleared
    num.appendChild(numTxt);
    num.addEventListener("click",buttonClicked);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    num.dispatchEvent(ev);
    expect(display.textContent).to.equal('551');
  });

  it('Equals Clicked', function() {
    var display = document.getElementById("display");
    var ev = document.createEvent("MouseEvent");
    var eq = document.createElement("div");
    var eqTxt = document.createTextNode("=");
    display.textContent = "22-10"; // not cleared
    eq.appendChild(eqTxt);
    eq.addEventListener("click",buttonClicked);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    eq.dispatchEvent(ev);
    expect(display.textContent).to.equal('12');
  });
});

describe('Clear Screen Test', function() {

  it('Should return null', function() {
    expect(clearScreen()).to.equal('')
  });
});

describe('Add Operator Tests', function(){
  it('Do not add when string ends with operator', function(){
    expect(addOperator('31+','-')).to.equal('31+');
    expect(addOperator('31-','-')).to.equal('31-');
    expect(addOperator('31/','-')).to.equal('31/');
    expect(addOperator('31x','-')).to.equal('31x');
  });

  it('Do not add when string is blank', function(){
    expect(addOperator('','+')).to.equal('')
  });

  it('Add operator when string ends in number', function(){
    expect(addOperator('23','x')).to.equal('23x')
  });
});

describe('Add Number Tests', function(){
  it('Add Number to Empty String', function(){
    expect(addNumber('','2')).to.equal('2')
  });

  it('Add Number to Non-empty String', function(){
    expect(addNumber('34','5')).to.equal('345')
  });
});

describe('Evaluate Function Tests', function(){
  it('Basic addition Test', function(){
    expect(evaluateFunction('2+2')).to.equal(4);
  });

  it('Basic Multiplication Test', function(){
    expect(evaluateFunction('3x6')).to.equal(18);
  });

  it('Basic Division Test', function(){
    expect(evaluateFunction('4/2')).to.equal(2);
  });

  it('Basic Subtraction Test', function(){
    expect(evaluateFunction('15-2')).to.equal(13);
  });
});
