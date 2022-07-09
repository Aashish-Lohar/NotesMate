import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    NoteslistComponent,
    NoteCardComponent,
    NotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
