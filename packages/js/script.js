function runPython() {
    let prog = document.getElementById("python-code").value;
    let output = document.getElementById("python-output");
    output.innerHTML = '';
    Sk.pre = "python-output";
    Sk.configure({ output: outf });
    (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
    let myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
        console.log('success');
    }, function(err) {
        output.innerHTML = err.toString();
    });
}

function outf(text) {
    let output = document.getElementById("python-output");
    output.innerHTML += text;
}
