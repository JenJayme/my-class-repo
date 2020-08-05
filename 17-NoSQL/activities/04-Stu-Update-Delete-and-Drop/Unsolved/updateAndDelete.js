// Updates, Deletes and Drops

// Instructions

// Go back to your classroom database.


// fill in mongo commands here
use classroomDB


// 1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

// db.students.insert({"name": "Jen", "hobbies": ["Extreme Basket Weaving"]})


// fill in mongo commands here
db.students.update({"name": "Jen"}, {$push: {"hobbies": "swimming"}})


// 2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.


// fill in mongo commands here
db.students.update({"name": "Chester"}, {$set: {"os": "windows"}})


// 3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.


// fill in mongo commands here
db.students.remove({"_id":ObjectId("5f29a0ad8c6404b60cf9d10c")})

// 4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.


// fill in mongo commands here
db.students.update({}, {$set: {"gavecandy": "false"}}, {multi: true})

// db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}}, {multi: true})

// db.places.update({"country": "Morocco"}, {$set: {"capital": "Rabat"}})


// 5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.


// fill in mongo commands here

