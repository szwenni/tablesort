tape('sorts numbers', function(t) {
  // Number column
  var el = table.querySelector('th:nth-child(1)');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that basic numbers sort
  t.equal(table.rows[1].cells[0].innerHTML, '1');
  t.equal(table.rows[2].cells[0].innerHTML, '2');
  t.equal(table.rows[3].cells[0].innerHTML, '3');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[0].innerHTML, '3');
  t.equal(table.rows[2].cells[0].innerHTML, '2');
  t.equal(table.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[0].innerHTML, '1');
  t.equal(table.rows[2].cells[0].innerHTML, '2');
  t.equal(table.rows[3].cells[0].innerHTML, '3');

  t.end();
});

tape('sorts currency', function(t) {
  // Number column
  var el = tableCurrency.querySelector('th');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableCurrency.rows[1].cells[0].innerHTML, '63€');
  t.equal(tableCurrency.rows[2].cells[0].innerHTML, '₽3.12');
  t.equal(tableCurrency.rows[3].cells[0].innerHTML, '£2.79');
  t.equal(tableCurrency.rows[4].cells[0].innerHTML, '$0.79');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableCurrency.rows[1].cells[0].innerHTML, '$0.79');
  t.equal(tableCurrency.rows[2].cells[0].innerHTML, '£2.79');
  t.equal(tableCurrency.rows[3].cells[0].innerHTML, '₽3.12');
  t.equal(tableCurrency.rows[4].cells[0].innerHTML, '63€');

  t.end();
});

