import { Injectable } from '@angular/core';
import { Notes } from 'src/assets/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes:Notes[]=[];
  constructor() { }
  getAll(){
    // return this.notes
    if(localStorage.getItem('notesArray')||""){
      this.notes=JSON.parse(localStorage.getItem('notesArray')||"")
      // return JSON.parse(localStorage.getItem('notesArray')||"")
      return this.notes
    }
    return this.notes
  }
  get(id:string){
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

  update(id:string,title:string,body:string){
    let note=this.notes[Number(id)];
    // let note=JSON.parse(localStorage.getItem('notesArray')||"")[id];
    note.title=title;
    note.body=body;
    localStorage.setItem('notesArray',JSON.stringify(this.notes));
  }
  delete(id:number){
    this.notes.splice(id,1)
    localStorage.setItem('notesArray',JSON.stringify(this.notes))
  }
}
