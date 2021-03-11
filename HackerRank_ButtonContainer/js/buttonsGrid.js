var btns = [];
var k = 0;

for (var i = 1; i < 10; i++) {
    if (i != 5) {
        let label = "btn" + i;
        switch (k) {
            case 0:
            case 1:
            case 2:
                btns[k] = document.getElementById(label);
                break;
            case 3:
                btns[7] = document.getElementById(label);
                break;
            case 4:
                btns[3] = document.getElementById(label);
                break;
            case 5:
                btns[6] = document.getElementById(label);
                break;
            case 6:
                btns[5] = document.getElementById(label);
                break;
            case 7:
                btns[4] = document.getElementById(label);
                break;
            default:
                break;
        }
        k++;
    }
}
var btn5 = document.getElementById("btn5");
btn5.onclick = function() {
    let btns2 = [];
    for (var i = 0; i < btns.length; i++) {
        let j = (i + 1) % 8
        btns2[j] = btns[i].innerHTML;
    }
    for (var i = 0; i < btns.length; i++) {
        btns[i].innerHTML = btns2[i];
    };
}