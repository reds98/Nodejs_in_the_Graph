const fs = require("fs")
const chalk=require("chalk")
const getNotes= function(){
	return "Your notes"
}
const addNote= (title,body)=>{
	const notes=loadNotes()
	//const duplicateNotes=notes.filter(note=> note.title==title)
	const duplicateNote=notes.find(note=> note.title==title)
	if(!duplicateNote)
	{
		notes.push({
			title:title,
			body:body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse("NEW NOTE ADDED"))
	}
	else{
		console.log(chalk.red.inverse("NOTE TITLE IS ALREADY TAKEN"))
	}
}
const deleteNote=title=>{
	const notes=loadNotes()
	const newNotes=notes.filter(note=> note.title!=title)
	if(newNotes.length<notes.length)
	{
		saveNotes(newNotes)
		console.log(chalk.green.inverse("NOTE DELETED SUCCESFULLY"))
	}
	else{
		console.log(chalk.red.inverse("NOTE TITLE DOESNT EXIST"))
	}
}
const listNotes=()=>{
	const notes=loadNotes()
	console.log(chalk.bgBlue("TUS NOTAS"))
	notes.forEach(note=>console.log(chalk.bgBlue(note.title)))
}

const readNote=title=>{
	const notes=loadNotes()
	const noteSearched=notes.find(note=> note.title==title)
	if(noteSearched)
	{
		console.log(chalk.white.inverse(noteSearched.title))
		console.log(chalk.bold.white(noteSearched.body))
	}
	else{
		console.log(chalk.red.inverse("NOTE TITLE DOESNT EXIST"))
	}
}
const saveNotes= notes=>{
	const dataJSON= JSON.stringify(notes)
	fs.writeFileSync("notes.json",dataJSON)
}
const loadNotes= ()=>{
	try{
		
		const dataBuffer= fs.readFileSync("notes.json")
		const dataJSON=dataBuffer.toString()
		return JSON.parse(dataJSON)
	}catch(e){
		return []
	
	}
}


module.exports= {
	deleteNote:deleteNote,
	getNotes:getNotes,
	addNote:addNote,
	listNotes:listNotes,
	readNote:readNote

}
