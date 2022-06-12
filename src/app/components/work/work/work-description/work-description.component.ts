import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-work-description',
  templateUrl: './work-description.component.html',
  styleUrls: ['./work-description.component.sass']
})
export class WorkDescriptionComponent implements OnInit {
  @Input() id
  descriptions = null
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    if(this.id) {
      this.afs.collection(`work/${this.id}/descriptions`).valueChanges().subscribe((descriptions: any[]) => {
        console.log(descriptions)
        if(descriptions) {
          this.descriptions = descriptions.sort((a, b) => {
            return a.rank > b.rank ? 1 : -1
          })
        }
      })
    }
  }

}
