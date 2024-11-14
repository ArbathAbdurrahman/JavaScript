const foo = function bar() {
    // statment
};

let x = 0;
while (x<10) {
    //do stuff
    x++;
}

function loop(x) {
    if (x>=10) {
        return;
    }
    loop(x+1);
}
loop(0);

function walkTree(node) {
    if (node === null) {
        return;
    }
    for (let i = 0; i<node.ChildNodes.length; i++) {
        walkTree(node.ChildNodes[i]);
    }
}

function fooo(i) {
    if (i<0) {
        return;
    }
    console.log(`begin : ${i}`);
    foo(i-1);
    console.log(`end : ${i}`);
}
fooo(3);