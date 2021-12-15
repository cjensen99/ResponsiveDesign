function renderTable(container, visitors){
    var table = $("<table/>");
    table.attr("id", "elementList");
    var headers =["Name", "Address", "Phone", "Email", "Actions"]
    var tbody = $("<tbody/>");
    var row = $("<tr/>");

    let i = 0;
    $.each(headers, function(h){
        var txt = headers[i];
        i += 1;
        row.append($("<th/>").html(txt));
    });
    row.addClass("firstRow");
    tbody.append(row);
    
    row = $("<tr/>");
    for(i = 0; i < visitors.length; i++){      
        // row.append($("<td/>").html(visitors[i].fullName))
        row.append($("<td/>").html(visitors[i].firstName + " " + visitors[i].lastName))
        // row.append($("<td/>").html(visitors[i].fullAddress))
        row.append($("<td/>").html(visitors[i].address + " " + visitors[i].city + " " + visitors[i].state + " " + visitors[i].zip))
        row.append($("<td/>").html(visitors[i].phone))
        row.append($("<td/>").html(visitors[i].email))
        let last = $("<td/>");
        let edit = $("<a/>").attr("onClick","showEditPage(" + i + ")");
        edit.append("<i/>").addClass("fas fa-edit");
        last.append(edit);
        let del = $("<a/>").attr("onClick","deleteVisitor(" + i + ")");
        del.append("<i/>").addClass("far fa-trash-alt");
        last.append(del);
        row.append(last);
        tbody.append(row);
        row = $("<tr/>");
    }

    table.append(tbody);
    $("#tableContainer").append(table);
}