//

function flowers(vazonukiekis, pradiniskiekis, dauginasi ) {
   let flowercount = pradiniskiekis;
   let year = 0;

    while (flowercount<vazonukiekis) {
        flowercount= flowercount + flowercount * dauginasi;
        year++;
    }
   return year; 
}

console.log(flowers(20,1,1));