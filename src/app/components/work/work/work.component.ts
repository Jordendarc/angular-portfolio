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
  loaded  = false
  work = null
  constructor(private afs: AngularFirestore,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.afs.collection('work', ref => ref.orderBy('from', 'desc')).valueChanges({ idField: 'id' }).subscribe((items: any[]) => {
      this.loaded = false
      if(items) {
        this.work = items
        this.loaded = true
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
