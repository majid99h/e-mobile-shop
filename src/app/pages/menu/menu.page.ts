import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: "Main",
      url: "main",
      icon: "home",
    },
    {
      title: "Electronic & Tools",
      open:false,
      children: [
        { title: "Television", url: "", icon: "" },
        { title: "Camera", url: "", icon: "" },
        { title: "Projector", url: "", icon: "" },
        { title: "Acessories", url: "", icon: "" },
      ],
    },
    {
      title: "Mobile & Tablets",
      open:false,
      children: [
        { title: "Smart Phones", url: "", icon: "" },
        { title: "Tablets", url: "", icon: "" },
        { title: "Samrt Wearable", url: "", icon: "" },
        { title: "Accessories", url: "", icon: "" },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}

// {
//   title: "",
//   children: [{ title: "", url: "", icon: "" }],
// },
