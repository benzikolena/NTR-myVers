const algo_name = "dispersio approach";  

function checker(stats, arr){
	const p = 0.1; // 10%
	let counter = 0;
	const columns = stats[0].length;
		  
  	for(let j=0; j<columns; j++){
		const column = getColumn(stats, j);
		const low = Aver(column) - 3*Math.sqrt(Var(column));
		const upp = Aver(column) + 3*Math.sqrt(Var(column));
		if((arr[j] <  low) || (arr[j] >  upp)) counter++;
  	}
  	return (counter/columns * 100 > p) ? false : true;
};