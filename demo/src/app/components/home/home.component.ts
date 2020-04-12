import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public flag: any = true;
  public title = 'home title';
  constructor(public request: RequestService) { }

  ngOnInit(): void {
    const oBox: any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'red';

    const syncData = this.request.getData();

    const callbackData = this.request.getCallbackData((data: any) => {
      console.log(data);
    });

    const promiseData = this.request.getPromiseData();
    promiseData.then((data) => {
      console.log(data);
    });


    const stream = this.request.getRxjsData();
    const d = stream.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      d.unsubscribe();
    }, 1000);

    const streamInerval = this.request.getRxjsInervalData();
    streamInerval.subscribe((data) => {
      console.log(data);
    });

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    const oBox1: any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = 'blue';
  }

  run() {
    alert('this is home component run!');
  }
  recieveMsg(event) {
    alert(event);
  }
}
