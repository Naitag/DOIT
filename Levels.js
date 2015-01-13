var lvl = [];//tablica obiektow leveli
lvl[0] = {
    array: [1, 1, 1, 1, 1, 1, 1, 1, 1],//tablica aktywnych czesci kwadratow [1,.. oznacza ze w pierwszym kwadracie jest aktywna pierwsza czesc (liczone od 0)
    changePattern: 0//schemat zmian do tego levelu
};
lvl[1] = {
    array: [2, 2, 2, 2, 2, 2, 2, 2, 2],
    changePattern: 1
};
lvl[2] = {
    array: [3, 3, 3, 3, 3, 3, 3, 3, 3],
    changePattern: 2
};
lvl[3] = lvl[0]//{
   // array: [0, 3, 2, 1, 0, 2, 1, 0, 3],
    changePattern: 3
//};
