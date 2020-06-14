import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../admin.service';

@Component(
  {
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
  })

export class CategoryComponent implements OnInit {
  constructor(private adminService: AdminService) {
  }


  categories:Array<any> = [];

  ngOnInit(): void {
    this.adminService.getCategories().subscribe(
      data => {
        const result: any = data;
        // this.categories = result;
        for (let category of result) {
          this.categories.push({category_id: category.id, name: category.name, brief: category.brief, parent: 'root', gst: 0 });
          if (category.subCategorys) {
            for (let subCategory of category.subCategorys) {
              this.categories.push({ category_id: subCategory.id, name: subCategory.name, brief: subCategory.brief, parent: category.name, gst: subCategory.gst });
            }
          }
        }
      },
      errorRes => {
        console.log("Post Error:", errorRes);
      }
    );
  }
}