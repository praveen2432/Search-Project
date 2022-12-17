import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  tableData: any;

  constructor() { }

  ngOnInit(): void {
    this.tableData = [{ "buyer": "Albert Flores", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer1.png" },
    { "buyer": "Jane Cooper", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer2.png" },
    { "buyer": "Robert Fox", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer3.png" },
    { "buyer": "Jerome Bell", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer4.png" },
    { "buyer": "Wade Warren", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer5.png" },
    { "buyer": "Albert Flores", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer1.png" },
    { "buyer": "Jane Cooper", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer2.png" },
    { "buyer": "Robert Fox", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer3.png" },
    { "buyer": "Jerome Bell", "project_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "price": 800, "delivery_time": "2Days", "post_day": "2 Day Ago", "offer": 25, "icon_path": "../../assets/customer4.png" }]
  }

}
