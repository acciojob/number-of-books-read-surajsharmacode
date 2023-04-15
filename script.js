const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
//const new=[];
const numberOfBooksRead = () => {
	let count=0;
	library.forEach(bookread=>{
		if(bookread.readingStatus===true){
			count++;
		}
	})
	return count
	//let bookReaded=library.filter(status=>status.readingStatus===true);
	
  
};

// Do not change the code below

alert(numberOfBooksRead());
