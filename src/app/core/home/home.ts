import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConferenceList } from '../conference-list/conference-list';
@Component({
  imports: [FormsModule, ConferenceList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  SiteName:String="site";
  imageSrc="https://static.wikia.nocookie.net/jimmyneutron/images/5/57/Jimmy_Neutron.png/revision/latest?cb=20180219044703";
  clickme(){
    return alert("Button clicked!");
  }
  inputitem="";
}
