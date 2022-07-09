import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  constructor( private renderer:Renderer2,private noteService:NotesService) {   
  }
  @Input('body') body!:string;
  @Input('title') title!:string;
  @Input('link') link!:number;
  @Output('delete') deleteEvent= new EventEmitter<any>()
  @ViewChild('truncator') truncator!:ElementRef<HTMLElement>;
  @ViewChild('bodytext') bodytext!:ElementRef<HTMLElement>;

  ngOnInit(): void {
  }
  ondelete(id:number){
    this.deleteEvent.emit()
  }

}
