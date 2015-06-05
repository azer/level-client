var test = require('prova');
var client = require("./");

test('returns a LevelDB client', function (t) {
  var foo = client('data');
  var bar = client(foo);
  var qux = client(bar);


  t.equal(foo, bar);
  t.equal(bar, qux);

  foo.put('span', 'eggs', function (error) {
    t.error(error);

    foo.get('span', function (error, value) {
      t.error(error);

      t.equal(value, 'eggs');
      t.end();
    });
  });
});
