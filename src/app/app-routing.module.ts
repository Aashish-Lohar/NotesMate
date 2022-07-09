import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteslistComponent } from "./pages/noteslist/noteslist.component";
import { MainlayoutComponent } from "./pages/mainlayout/mainlayout.component";
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';
const routes: Routes = [
  {
    path: "", component: MainlayoutComponent, children: [
      { path: "", component: NoteslistComponent },
      { path: ':id', component: NotesDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
