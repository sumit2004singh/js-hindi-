//filter

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]

// const newnums = mynums.filter( (num) => num > 4 )

//if num>4 will be inside paranthesis or without paranthesis(implicit) then filter will the return the value by its own but when you will use curlybraces { return num  > 4} then you have to use the return keyword also 

// const newnums = []

// mynums.forEach((num) => {
//     if (num > 4) {
//         newnums.push(num)
//     }
// })


// console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks = books.filter((bk) => bk.genre === "History")

 
  
  const userbooks = books.filter((bk) => bk.publish >= 1999 && bk.genre === "History")
  console.log(userbooks);

  //________________________-map-______________________________

//   const  mynum =[1, 2, 3 ,4 ,5 ,6 , 7, 8, 9, 10]

//    const newnums = mynum.map((num) => num + 10)

//    console.log( newnums);

   //chaining

//    const newnums = mynum
//    .map((num) => num * 10)
//    .map((num) => num+2)
//    .filter((num) => num >= 40)
//    console.log(newnums);
   
   //__________________________-reduce-______________________________

   const  mynum =[1, 2, 3 ,4 ,5 ,6 , 7, 8, 9, 10]

   const mytotal = mynum.reduce((acc, currval) => acc+currval , 0)
   console.log(mytotal);
   