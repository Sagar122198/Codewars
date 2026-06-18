function cookie(x) {
    let type = typeof (x);
    if (type == 'string') {
        return "Who ate the last cookie? It was Zach!";
    } else if (type == 'number') {
        return "Who ate the last cookie? It was Monica!";
    } else {
        return "Who ate the last cookie? It was the dog!";
    }
}
