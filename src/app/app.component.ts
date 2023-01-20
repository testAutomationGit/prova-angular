import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvaPageComponent } from './pages/prova-page/prova-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;
  page: any;

  constructor(private CFR: ComponentFactoryResolver,
    private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.page = params.page;
        console.log("page:"+this.page); // price
        if(this.page == 'prova')
        {
          let componentFactory = this.CFR.resolveComponentFactory(ProvaPageComponent);

          let childComponentRef = this.VCR.createComponent(componentFactory);

          let childComponent = childComponentRef.instance;
        }
      }
    );
  }


}
