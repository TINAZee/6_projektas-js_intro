


function joke (jokeList, breake , showtime ) {
    
    let pokstusskaicius = 0;
    let jokeindex = 0;
    let time = 0;

    while (time <  showtime) {

        time += jokeList[jokeindex];
        time += breake;
        pokstusskaicius++;
        jokeindex++;

        if (jokeindex === pokstusskaicius.length) {
            jokeindex=0;
        }
    }
    return pokstusskaicius
}

const jonasJokes = [11, 3, 2, 4, 2, 5]
const timeout = 1;
const showLenght = 60;

console.log(joke(jonasJokes, timeout, showLenght));


