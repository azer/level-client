var client = require("./");

it('returns a LevelDB client', function(done){
  var foo = client('data');
  var bar = client(foo);
  var qux = client(bar);


  expect(foo).to.equal(bar);
  expect(bar).to.equal(qux);

  foo.put('span', 'eggs', function (error) {
    if (error) return done(error);

    foo.get('span', function (error, value) {
      if (error) return done(error);

      expect(value).to.equal('eggs');
      done();
    });
  });
});
