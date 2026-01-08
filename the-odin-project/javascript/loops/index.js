/**
 * LOOP for ..... of
 * 
 */

const cats = ["Pechiche", "Michi", "Micha", "Pedro", "Negro"]

for (const cat of cats) {
    console.log(cat)
}

/**
 * LOOPS map()
 */

function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);

/**
 * LOOP filter
 */
function lCat(string) {
    return string.startsWith("N");
}

const filtered = cats.filter(lCat);

console.log(filtered)

/**
 * Arrow function
 */

const filtered2 = cats.filter((cat) => cat.startsWith("L"))

console.log(filtered2)


/**
 * LOOP for
 */

let myCats = "Mis gatos se llaman "

for(let i = 0; i < cats.length; i++) {

    if (i === cats.length - 1)  {
        myCats += `y ${cats[i]}.`
    } else {          
        myCats += `${cats[i]}, ` 
    }
}

console.log(myCats);

/**
 * LOOP WHILE
 */

let myCatsWhile = "Mis gatitos se llaman "

i = 0;
while(i < cats.length) {
    if(i === cats.length - 1) {
        myCatsWhile += ` y ${cats[i]}`
    } else {
        myCatsWhile += `${cats[i]}, `
    }
    i++;
}

console.log(myCatsWhile)


/**
 * LOOPS do While
 */

iteration = 0

let myCatsDoWhile = "Mis gatiticos son "

do {
    if (iteration === cats.length - 1)  {
        myCatsDoWhile += `y ${cats[iteration]}.`
    } else {          
        myCatsDoWhile += `${cats[iteration]}, ` 
    }

    iteration++;
} while(iteration < cats.length);

console.log(myCatsDoWhile);