const cart = JSON.parse(localStorage.getItem("cart"));

// generate table html
// then update inner html (caption, element, array of objects)

//populate the table data


//caption, element, array, id, classes
function generateTable( tableMaker ) {
    
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
            <td>1</td>
            <td>$10</td>
          </tr>
        `;
    }

    // generate the footer
    tfoot = `
        <tfoot>
            <th>Subtotal</th>
            <td></td>
            <td>${tableMaker.footerTotal}</td>
        </tfoot>
    `
    // let html = `
    // <table>
    //   ${thead}
    //   ${tbody}
    //   ${tfoot}
    // </table>
//   `    
  document.getElementById(tableMaker.element).innerHTML = `
      <table id="${tableMaker.id}">
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

for (let key in productsDB) {
    const currObj = productsDB[key];

   //caption, element, array, id, classes
   generateTable({"caption": getCaption(key),
                 "element": key, "array": currObj, 
                        "id": key, "classes": "red",
                    "footerTotal":"$15"});

}

function getCaption(key) {
    // create the caption
    let caption = key;
    switch (key) {
        case "training":
            caption = "This is training"
        default:
            break;
    }
    return caption;
}