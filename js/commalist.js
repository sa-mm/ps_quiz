var commaList = function (list) {
    var len = list.length;
    if (len < 1) {
        return list.join('')
    } else if (len <= 2) {
        return list.join(' and ');
    } else {
        return convertLongerList(list);
    }
}

function convertLongerList(list) {
    return list.reduce(function (str, word, index, array) {
        if (index === 0) {
            return str += word;
        } else if (index === array.length - 1) {
            return str += ', and ' + word;
        }
        return str += ', ' + word;
    }, '');
}

module.exports = commaList;