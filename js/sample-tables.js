// generate table html
// then update inner html (caption, element, array of objects)

//populate the table data


//caption, element, array, id, classes
function generateTable( tableMaker ) {
    /*
    //caption, element, array, id, classes
    generateTable({"caption": getCaption(key),
                    "element": key, // property
                    "array": currObj, // array of objects
                    "id": key, //name of id you want to put on there
                    "classes": "red", // class you want to put on there
                    "footerTotal": "$15"});

    }

    */
    
    let tbody = "";
    let thead = "";
    let tfoot = "";

    // generate the header
    thead = `
        <caption>${tableMaker.caption}</caption>
        <thead>
            <tr>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            </tr>
        </thead>
        `;

    for (var i = 0; i < tableMaker.array.length; i++) {
        var obj = tableMaker.array[i];
        
        tbody += `
          <tr>
            <th>${obj.name}</th>
            <td>${obj.qty}</td>
            <td>$${obj.price}</td>
          </tr>
        `;
    }

    // generate the footer
    tfoot = `
        <tfoot>
            <th>Subtotal</th>
            <td></td>
            <td>$${tableMaker.footerTotal}</td>
        </tfoot>
    `
    // let html = `
    // <table>
    //   ${thead}
    //   ${tbody}
    //   ${tfoot}
    // </table>
//   `    
  document.getElementById("table-" + tableMaker.element).innerHTML = `
      <table id="${tableMaker.id}" class="${tableMaker.classes}">
      <colgroup>
        <col style="width:50%">
        <col style="width:25%">
        <col style="width:25%">
      </colgroup>
      ${thead}
      ${tbody}
      ${tfoot}
      </table>
  `    

}

