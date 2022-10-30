function log(msg) {
    console.log(msg);
}
/**
* short form function to capture id, class or tag in document
* @param {string} selector 
* @return {object} object or reference to the element
*/
function $(selector) {
    if (/^#/.test(selector)) {
        return document.getElementById(selector.slice(1));
    }

    if (/^\./.test(selector)) {
        return document.getElementsByClassName(selector.slice(1));
    }
    return document.getElementsByTagName(selector);
}
/**
* short form for Document Query selector
* @param {string} selector 
*/
function $$(selector, all = 0) {
    if (all === 0)
        return document.querySelector(selector);
    else
        return document.querySelectorAll(selector);
}
/**
* Insert new spanor div element after an existing element
* @param {string} newNode span|div
* @param {Node} el reference to existing element
* return reference to new element
*/
function insertAfter(newNode, el) {

    if (newNode === 'span') {
        var newNodeEl = document.createElement("span");
    } else {
        var newNodeEl = document.createElement("div");
    }

    return el.parentNode.insertBefore(newNodeEl, el.nextSibling);
}
function isset(el) {
    return el === 'undefined' ? 0 : (el == null ? 0 : 1);
}
/**
* event listener function
*/
function on(event, e, func, propagation = false) {
    return e.addEventListener(event, func, propagation);
}
function off(event, e, func) {
    return e.removeEventListener(event, func);
}
function simulateClick(id) {
    document.getElementById(id).click();
}
function ajaxHandler(path, method = 'GET', formdata = '', ajaxResultHandler) {
    //log(path)
    if ($('#spinner')) $('#spinner').style.visibility = 'visible';
    const ajax = new XMLHttpRequest();

    if (!ajax) {
        log("unable to initiate ajax object!");
        ajaxResultHandler(-1, -1);
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                //log(this.response)
                ajaxResultHandler(this.response, 0);
            } else {
                ajaxResultHandler(-1, this.status);
            }
        }
    }
    ajax.open(method, path);
    ajax.send(formdata);

}
function kformater($number) {
    if (typeof ($number) !== 'number') {
        return -1;
    }
    $formated_num = $number;
    let $format = [{ v: 1, s: '' }, { v: 1E3, s: 'K' }, { v: 1E6, s: 'M' }, { v: 1E9, s: 'B' }];
    let $j = 3;
    while (1) {
        if ($number >= $format[$j].v) {
            if ($j == 0)
                $formated_num = ($number / $format[$j].v) + $format[$j].s;
            else
                $formated_num = ($number / $format[$j].v).toFixed(2) + $format[$j].s;
            break;
        }
        if ($j <= 0) { break; } $j--;
    }
    return $formated_num;
}
function addRow(data, tableId, rowAttributes, position = 0) {
    let newRow = '<tr ' + rowAttributes + '>';
    data.forEach(el => {
        newRow += '<td>' + el + '</td>';
    });
    newRow += '</tr>';

    if (position != 0) {
        $$('#' + tableId + '>tbody>tr', 1)[(position - 2)].outerHTML += newRow;
    } else {
        $('#' + tableId).innerHTML += newRow;
    }
}
function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function parseUrlQuery(url) {
    var query = [];
    url.substring(url.indexOf('?') + 1).split('&').
        forEach(el => {
            var split = el.split('=');
            query[split[0]] = split[1];
        });
    return query;
}