import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteslistComponent } from './noteslist.component';

describe('NoteslistComponent', () => {
  let component: NoteslistComponent;
  let fixture: ComponentFixture<NoteslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
