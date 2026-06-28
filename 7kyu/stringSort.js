function lineupStudents(students) {
    let lst = students.split(" ");
    return lst.sort((a, b) => {
        if (a.length != b.length) {
            return b.length - a.length
        } else {
            return b.localeCompare(a);
        }

    })


}