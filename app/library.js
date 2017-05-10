
 'use strict'

	let words =(str)=>
	{
		str= str.replace(/[ ][ ]*/g, ' ');
		let words_array = str.split(" ");
	
		let obj ={};
		
		for(let counter=0; counter<words_array.length; counter++)
		{
			
			
			if( obj[words_array[counter]])
			{
				obj[words_array[counter]]++;
					
			}
			else
			{
				obj[words_array[counter]] = 1
			}
		}
		return obj;
	}
	
	words('My name is Daniel');
	
	
	module.exports = words;
	