enum Direction {
    Up ,
    Down, // becomes 2 by default
    Left, // becomes 3
    Right // becomes 4
}

function doSomething(keyPressed: Direction) {
	console.log("Helo")
}

doSomething(Direction.Down)
console.log("Direction Down:", Direction.Down);


//Enum
//? enum ResponseStatus {
///    Success = 200,
///     NotFound = 404,
///     Error = 500
// ?}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
    // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })