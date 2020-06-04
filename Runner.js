function eat_cake(str) {
    var numTimes = 1;
    var restart;
    var length = str.length;

    if (length > 1) {
        var firstLetter = str.substring(0, 1);
        restart = true;
    }
    for (var i = 1; i < length + 1; i++) {
        if (firstLetter !== str.substring(i - 1, i)) {
            restart = false;
        }
    }
    if (restart == true) {
        numTimes = length;
    }
    var error;
    var pos1;
    var pos2;
    for (var k = length - 1; k > 0; k--) {
        if (length % k == 0) {
            pos1 = str.substring(0, length / k);
            pos2 = str.substring(length / k, length / k + pos1.length);

            if (pos1 == pos2 && numTimes < k) {
                error = false;

                for (var j = 1; j < length / k + 1; j++) {
                    pos1 = pos2;
                    pos2 = str.substring(j * length / k, j * length / k + pos1.length);

                    if (pos1 !== pos2 && pos2.length > 0) {
                        error = true;
                    }
                }
                if (!error) {
                    numTimes = k;
                }
            }
        }
    }
    return numTimes;
}