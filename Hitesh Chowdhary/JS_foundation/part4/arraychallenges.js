/*
1.Declare an array named `teaFlovers` that contains the strings `green tea`, `black tea`, and `oolong tea`.
    Access the first element of the array and store it in a variable named `firstTea`
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavours[0];
console.log(firstTea);


/*
2. declare an array named `cities` containing `London` , `Tokyo`, `paris` and `new York`. Access the third element in the array and store it in a variable named `favoritecity`
*/

let cities = ["London", "Tokyo", "paris", "new York"];
const favoritecity =cities[2];
console.log(favoritecity);



/*
3. You have an array named `teaTypes` containing "herbal tea" "white tea" and "masala chai". change the second element of the array to "jasmine tea".
*/

let teatype = ["herbal tea", "white tea", "masala chai"] 
teatype[1] = "jasmine tea";
console.log(teatype);


/*
4. Declare an array named `citiesvisited` containing "Mumbai" and "Sydney"
    add berlin to the array using the `push` method.
*/

 let citiesvisited = ["Mumbai", "Sydney"];
 citiesvisited.push("Berlin");
 console.log(citiesvisited);
 

/*

5. You have an array named `teaorders` with "chai", "iced tea", "matcha" and "earl grey".
    remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`
*/

    let teaorders = ["chai", "iced tea", "matcha", "earl grey"];
    let lastOrder = teaorders.pop();
    console.log(lastOrder);

/*
6. you have an array named `popularteas` containing "green tea", "oolong tea" and "chai". create a soft copy of this array named `softcopyTeas`.
*/

    let popularteas = ["green tea", "oolong tea", "chai"]
    let softcopyTeas = popularteas
    console.log(softcopyTeas);
    

/*
7. you have an array named `topcities` containing "Berlin", "Singapore" and "New York" create a hard copy of this array named `hardcopycities`
*/

 let topcities = ["Berlin", "Singapore", "New York"];
 let hardcopycities =[...topcities]
 console.log(hardcopycities);
 
 

/*
8. you have two arrays: `Europeancities` containing "Paris" and "Rome" and `Asiancities` containing "Tokyo" and "Bangkok" merge these two arrays into a new array named `worldcities`
*/

 let Europeancities = ["Paris", "Rome"];
 let Asiancities = ["Tokyo", "Bangkok"];
 let worldcities = Europeancities.concat(Asiancities);
 console.log(worldcities);


/*
9. you have an array named `teammenu` containing "Masalachai" "Oolongtea" "greentea" "earl grey" find the length of the array and store it in a variable named `menulength`
*/

 let teammenu =["Masalachai", "Oolongtea", "greentea", "earl grey"]
 let menulength = teammenu.length;
 console.log(menulength);
 

/*
you have an array named "Citybucketlist" containing "kyoto" "London" "Capetown" and "Vancouver" check if "London" is in the array and store the result in a variable named isLondoninlist
*/

 let Citybucketlist = ["kyoto", "London", "Capetown" ,"Vancouver"]

 let isLondoninlist = Citybucketlist.includes("London");
 console.log(isLondoninlist);
