import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from 'src/app/notes.service';
import { Notes } from 'src/assets/notes.model';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {
  notes!:Notes;
  noteId!:string;
  new!:boolean;
  constructor(private noteService:NotesService, private router:Router,private route:ActivatedRoute) {
    this.notes=new Notes();
   }

  ngOnInit(): void {
    //we want to find if we are creating a new note or editing an existing one
    this.noteId=this.route.snapshot.params['id'];
    if(this.noteId!='new'){
      this.notes=this.noteService.get(this.noteId);
      this.new=false
    }
    else{
      this.new=true
    }
  }
  onsubmit(form:NgForm){
    if(this.new){
      this.noteService.add(form.value)
      this.router.navigateByUrl('/')
    }
    else{
      this.noteService.update(this.noteId,form.value.title,form.value.body)
      this.router.navigateByUrl('/')
    }
  }
  cancel(){
    this.router.navigateByUrl('/');
  }

}
