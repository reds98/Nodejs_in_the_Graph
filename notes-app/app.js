const yargs= require("yargs")
const notes= require("./notes.js")
yargs.version("1.12.3")
//add ,remove read
yargs.command({
	command:"add",
	describe:"Add a new note",
	builder:{
		title:{
			describe:"Note title ",
			demandOption:true,
			type:"string"
		},
		
		body:{
			describe:"Note body ",
			demandOption:true,
			type:"string"
		}
	},
	handler(argv){
		notes.addNote(argv.title,argv.body)
	}
})

yargs.command({
	command:"remove",
	describe:"Remove  a  noted",
	builder:{
		title:{
			describe:"Note Title that you want to delete",
			demandOption:true,
			type:"string"
		}
	},
	handler(argv){
		notes.deleteNote(argv.title)
	}
})
yargs.command({
	command:"list",
	describe:"Lists all the  notes",
	handler(){
		notes.listNotes()
		console.log("List all the notes")

	}
})
yargs.command({
	command:"read",
	describe:"Read  an especific Note",
	builder:{
		title:{
			describe:"Note title that you want to read",
			demandOption:true,
			type:"string"
		}
	},
	handler(argv){
		notes.readNote(argv.title)

	}
})
yargs.parse()

