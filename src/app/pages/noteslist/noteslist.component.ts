import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import { Notes } from 'src/assets/notes.model';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss'],
})
export class NoteslistComponent implements OnInit {
  notes!:Notes[];
  filteredNotes!:any[];
  constructor(private noteService:NotesService) {
   }

  ngOnInit(): void {
    this.notes=this.noteService.getAll();
    // this.filteredNotes=this.notes;
    this.filteredNotes=this.notes
  }
  deleteNote(id:number){
    this.noteService.delete(id)
    this.filteredNotes=this.notes;
    // this.filteredNotes=JSON.parse(localStorage.getItem('notesArray')||"")
  }
  filter(query:string){
    query=query.toLowerCase().trim();
    let allresults!:Notes[]
    let terms:string[]=query.split(' ');
    terms=this.removeDuplicate(terms);
    //compile all relevant results into the allresults array
    terms.forEach(term=>{
      let results:Notes[]=this.relevantNotes(term);
      //append results to allresults array
      allresults=[...results];
    });
    //all results will include duplicate notes because a particular notes can be result of many search
    //terms but we dont want to show the same note multiple times on the UI so we first must remove  the duplicates
    let uniqueresults=this.removeDuplicate(allresults);
    this.filteredNotes=uniqueresults;
  }
  removeDuplicate(arr:any[]):any[]{
    console.log("in removeDuplicate",arr)
    let unique:Set<any>=new Set<any>();
    arr.forEach(e=>unique.add(e));
    return Array.from(unique)
  }
  relevantNotes(query:string){
    query=query.toLowerCase().trim();
    let relevantNotes=this.notes.filter(note=>{
      if(note.title && note.title.toLowerCase().includes(query)){
        return true;
      }
      if(note.body && note.body.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })
    return relevantNotes
  }

}
