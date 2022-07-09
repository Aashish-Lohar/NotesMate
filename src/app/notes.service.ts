import { Injectable } from '@angular/core';
import { Notes } from 'src/assets/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes!:Notes[];
  constructor() { }
  getAll(){
    // return this.notes
    this.notes=JSON.parse(localStorage.getItem('notesArray')||"")
    // return JSON.parse(localStorage.getItem('notesArray')||"")
    return this.notes
  }
  get(id:number){
    return JSON.parse(localStorage.getItem('notesArray')||"")[id];;
    // return this.notes[id]
  }
  getId(note:Notes){
    // return this.notes.indexOf(note);
    return JSON.parse(localStorage.getItem('notesArray')||"").indexOf(note)
  }
  add(note:Notes){
    // console.log(note)
    let newlength=this.notes.push(note);
    localStorage.setItem('notesArray',JSON.stringify(this.notes))
    let index=newlength-1;
    return index
  }

  update(id:number,title:string,body:string){
    let note=this.notes[id];
    // let note=JSON.parse(localStorage.getItem('notesArray')||"")[id];
    console.log("in update function in service",note)
    note.title=title;
    note.body=body;
    console.log("in update after assifning",this.notes);
    localStorage.setItem('notesArray',JSON.stringify(this.notes));
    console.log("from local storage",JSON.parse(localStorage.getItem('notesArray')||""))

  }
  delete(id:number){
    this.notes.splice(id,1)
    localStorage.setItem('notesArray',JSON.stringify(this.notes))
  }
}
