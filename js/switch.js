const day = 'ket';

switch (day) {
    case 'pir' :
        console.log(1);
        break;
    case 'ant' :
        console.log(2);
        break;
    case 'tre' :
        console.log(3);
        break;
    case 'ket' :
        console.log(4);
        break;
    default:
        console.log("irasyk teisingai");
        break;
}
// // Autobusas 6G;

console.log('-------------');

const stotele = 'Vasaros';

switch (stotele) {
    case 'Naujoji Vilnia':
        console.log('Naujoji Vilnia');
    case 'Geniu':
        console.log('Geniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Kar Mindaugo':
        console.log('Kar Mindaugo');
    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');
    case 'Tuskulenai':
        console.log('Tuskulenai');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Tremtiniu':
        console.log('Tremtiniu');
        break;

    default:
        console.log('Tokia stotele nerasta 🙁');
        break;
}
function getDrinkByProfession(drink){
    
    let drink = "Jabroni";
switch (drink) {

    case "Jabroni" :
        drink = "Patron Tequila";
        break;
    case "School Counselor" :
        drink = "Anything with Alcohol";
        break;
    case  "Programmer" :
        drink = ("Hipster Craft Beer");
        break;
    case  "Bike Gang Member" :
        drink = "Moonshine";
        break;
    case  "Politician" :
        drink = "Your tax dollars";
        break;
    case "Rapper" :
        drink = "Cristal";
        break;

    default:
        drink = "Beer";
        break;
}};