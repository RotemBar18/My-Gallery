var gTrans = {

    'id': {
        en: 'Id',
        he: 'מספר ספר'
    },
    'title': {
        en: 'Title',
        he: 'כותרת'
    },
    'price': {
        en: 'Price',
        he: 'מחיר',
    },
    'actions': {
        en: 'Actions',
        he: 'פעולות',
    },
    'new-price': {
        en: 'new price:',
        he: 'מחיר חדש:',
    },
    'add': {
        en: 'Add Book',
        he: 'הוספת ספר',
    },
    'new-name': {
        en: 'new name:',
        he: 'שם חדש:',
    },
    'read': {
        en: 'Read',
        he: 'לקריאה'
    },
   'update': {
        en: 'Update',
        he: 'עדכון'
    },
    'remove': {
        en: 'Remove',
        he: 'מחיקה'
    },
    'header': {
        en: 'Book Shop',
        he: 'חנות ספרים'
    },
    'new-book-name': {
        en: 'Book name?',
        he: 'שם הספר?'
    },
    'new-price-btn': {
        en: 'update!',
        he: 'עדכנ/י!'
    },
    'price-alert': {
        en: 'What is the new price?',
        he: 'מה המחיר החדש?'
    },
    'next-page': {
        en: 'Next page',
        he: 'עמוד הבא'
    }
}

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang]

    // if not founf - use english
    if (!txt) txt = keyTrans['en']

    return txt;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')

    els.forEach(function (el) {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)

        if (el.nodeName === 'INPUT') {
            // el.placeholder = txt
            // THE SAME!!
            el.setAttribute('placeholder', txt)
        } else {
            el.innerText = txt
        }
    }) 
}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

// function formatDate(time) {

//     var options = {
//         year: 'numeric', month: 'short', day: 'numeric',
//         hour: 'numeric', minute: 'numeric',
//         hour12: true,
//     };

//     return new Intl.DateTimeFormat(gCurrLang, options).format(time);
// }
