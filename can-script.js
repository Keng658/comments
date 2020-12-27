$.getJSON('https://jsonplaceholder.typicode.com/comments', function(data) {
  data.forEach(function (r) {
    var html = '<tr>' +
                  '<td>'+r.name+'</td>' +
                  '<td>'+r.email+'</td>' +
                  '<td>'+r.body+'</td>' +
                '</tr>';
    $('table tbody').append(html);
  });
});