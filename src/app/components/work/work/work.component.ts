import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {combineLatest, map, mergeMap, of, switchMap} from 'rxjs';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass'],
  providers: [DatePipe]
})
export class WorkComponent implements OnInit {

  work = null
  constructor(private afs: AngularFirestore,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.afs.collection('work').valueChanges({ idField: 'id' }).subscribe((items: any[]) => {
      console.log('item', items)
      if(items) {
        this.work = items.sort((a, b) => {
          return new Date(a.from) > new Date(b.from) ? -1 : 1
        })
      }
    })
  }
  determineTo(date) {
    if(date) {
      return date === 'present' ? 'present' : this.datePipe.transform(date, 'MMMM y')
    } else {
      return ''
    }
  }
}
