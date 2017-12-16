import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, private route: ActivatedRoute) {}

  jumpToHero() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView(); // <-- omit element from the argument
      }
    });
  }
}
