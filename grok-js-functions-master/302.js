function foo(){
	const x = 42;

	function bar(){
		const x = 7;
		return x;
	}
	bar();
	
	return x;
}

console.log(foo())

