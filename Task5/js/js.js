var prev = { style: { backgroundColor: '' } };

function myFunction(a) {
    prev.style.backgroundColor = '';
    a.style.backgroundColor = 'orange';
    prev = a;
}