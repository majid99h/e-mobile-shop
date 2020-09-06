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
      url: "menu/tabs/home",
      icon: "home",
    },
    {
      title: "Electronic & Tools",
      open: false,
      children: [
        { title: "Television", url: "/menu/product/Television", icon: "tv" },
        { title: "Camera", url: "/menu/product/Camera", icon: "camera" },
        { title: "Projector", url: "/menu/product/Projector", icon: "videocam" },
        {
          title: "Acessories",
          url: "/menu/product/Acessories",
          icon: "battery-charging",
        },
      ],
    },
    {
      title: "Mobile & Tablets",
      open: false,
      children: [
        { title: "Smart Phones", url: "/menu/product/SmartPhones", icon: "call" },
        { title: "Tablets", url: "/menu/product/Tablets", icon: "tablet-portrait" },
        {
          title: "Samrt Wearable",
          url: "/menu/product/product/SamrtWearable",
          icon: "watch",
        },
        { title: "Accessories", url: "/menu/product/Accessories", icon: "headset" },
      ],
    },
    {
      title: "Sports & Entertainment",
      open: false,
      children: [
        {
          title: "Camping and Hikng",
          url: "/menu/product/Hiking",
          icon: "walk",
        },
        { title: "Cycling", url: "/menu/product/Cycling", icon: "bicycle" },
        { title: "Accessories", url: "/menu/product/Accessories", icon: "football" },
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
