
var find = require('..');

describe('find(arr, fn)', function(){
  it('should return the first truthy value', function(){
    var arr = [{ name: 'Tobi' }, { name: 'Jane' }];
    var ret = find(arr, function(u){ return u.name == 'Jane' });
    ret.should.equal(arr[1]);
  })
})

describe('find(arr, obj)', function(){
  it('should return ', function(){
    
  })
})