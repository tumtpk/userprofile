
    var content = $("#content-data");

    renderTable(items);

    function renderTable(data){
        var html = '';
        // loop for generate table data
        // $.each( data, function( key, val ) {
        //     html += '<tr>'
        //         + '<td>'+val.firstname+'</td>'
        //         + '<td>'+val.lastname+'</td>'
        //         + '<td>'+val.hour+'</td>'
        //         + '<td>'+calculateSalary(val.hour)+'</td>'
        //     + '</tr>';
        // });

        // content.html(html);
    }

    function calculateSalary(hour) {  
        // var salary = hour*300;
        // return salary;
    }

    function inputKeyword(){
        // var keyword = $("#input-search").val();
        // search(keyword);
    }

    function search(keyword) {
        // var result = $.grep(items, function(val) {
        //     return (val.firstname).includes(keyword);
        // });
        // renderTable(result);
    }
        