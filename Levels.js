var lvl = [];//tablica obiektow leveli
lvl[0] = {
    array: [0, 1, 2, 3, 0, 1, 2, 3, 0],//tablica aktywnych czesci kwadratow [1,.. oznacza ze w pierwszym kwadracie jest aktywna pierwsza czesc (liczone od 0)
    changePattern: [0, 0, 0, 0, 0, 0, 0, 0, 0]//schemat zmian do tego levelu do kazdego kwadratu
};
lvl[1] = {
    array: [2, 1, 0, 3, 2, 0, 2, 1, 2],
    changePattern: [1, 1, 1, 1, 1, 1, 1, 1, 1]
};
lvl[2] = {
    array: [3, 0, 3, 1, 3, 2, 3, 0, 1],
    changePattern: [2, 2, 2, 2, 2, 2, 2, 2, 2]
};
lvl[3] = {
    array: [0, 3, 2, 1, 0, 2, 1, 0, 3],
    changePattern: [3, 3, 3, 3, 3, 3, 3, 3, 3]
};
lvl[4] = {
    array: [1, 3, 2, 2, 0, 3, 1, 2, 0],
    changePattern: [4, 4, 4, 4, 4, 4, 4, 4, 4]
};
lvl[5] = {
    array: [2, 1, 0, 0, 0, 2, 3, 3, 0],
    changePattern: [0, 0, 0, 1, 1, 1, 2, 2, 2]
};
lvl[6] = {
    array: [1, 3, 2, 0, 0, 3, 0, 1, 0],
    changePattern: [1, 1, 1, 2, 2, 2, 3, 3, 3]
};
lvl[7] = {
    array: [0, 2, 1, 0, 3, 1, 0, 1, 0],
    changePattern: [2, 2, 2, 3, 3, 3, 4, 4, 4]
};
lvl[8] = {
    array: [1, 2, 1, 3, 3, 0, 2, 2, 0],
    changePattern: [1, 2, 3, 4, 1, 2, 3, 4, 1]
};
lvl[9] = {
    array: [3, 1, 0, 2, 1, 3, 1, 3, 0],
    changePattern: [3, 1, 2, 4, 2, 3, 1, 2, 1]
};
lvl[10] = {
    array: [3, 1, 2, 4, 2, 3, 1, 2, 1],
    changePattern: [3, 1, 0, 2, 1, 3, 1, 3, 0]
};