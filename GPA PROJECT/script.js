let b1 = document.getElementById('bt1');
b1.addEventListener('click', addcourse);
function addcourse() {
    let d1 = document.getElementById('div2');
    d1.innerHTML += '<input class="in1" placeholder="Enter Grade"/><select class="se1"><option>1</option><option>2</option><option>3</option><option>4</option></select>';
}

let b2 = document.getElementById('bt2');
b2.addEventListener('click', subcourse);
function subcourse() {
    let i = document.getElementsByClassName('in1');
    let s = document.getElementsByClassName('se1');
    let p = 0;
    let c = 0;

    for (let a = 0; a < i.length; a++) {
        c += Number(s[a].value);
        if (i[a].value == 'O' || i[a].value == 'o') {
            p += (10 * s[a].value);
        }
        else if (i[a].value == 'A+' || i[a].value == 'a+') {
            p += (9 * s[a].value);
        }
        else if (i[a].value == 'A' || i[a].value == 'a') {
            p += (8 * s[a].value);
        }
        else if (i[a].value == 'B+' || i[a].value == 'b+') {
            p += (7 * s[a].value);
        }
        else if (i[a].value == 'B' || i[a].value == 'b') {
            p += (6 * s[a].value);
        }
        else if (i[a].value == 'C' || i[a].value == 'c') {
            p += (5 * s[a].value);
        }
        else if (i[a].value == 'U' || i[a].value == 'u' || i[a].value == 'AB' || i[a].value == 'ab') {
            p += (0 * s[a].value);
        }
        else {
            alert('Invalid  Grade');
            return false;
        }



    }
    let m = p / c;
    let n = m.toFixed(2);
    let d2 = document.getElementById('div2');
    let d3 = document.getElementById('div3');
    let h=document.getElementById('htag1');
    d2.innerHTML = '<h1 id="result">Congratulations!<br>Your GPA is</h1>';
    d2.innerHTML += '<h1 id="res1">' + n + '</h1>';
    d3.innerHTML = '';
    h.innerHTML='';

}