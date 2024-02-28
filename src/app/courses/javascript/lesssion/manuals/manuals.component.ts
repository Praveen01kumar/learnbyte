import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';
@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.scss']
})
export class ManualsComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: "Understanding Manuals and Specifications", id: "understanding_manuals_and_specifications" },
      { name: "Understanding Array Manipulation", id: "understanding_array_manipulation" },
      { name: "Key Features of Manuals and Specifications", id: "key_features_of_manuals_and_specifications" },
      { name: "Exploring Asynchronous Programming", id: "exploring_asynchronous_programming" },
      { name: "Best Practices and Optimization Techniques", id: "best_practices_and_optimization_techniques" },
      { name: "Exploring Web APIs", id: "exploring_web_APIs" },
      { name: "Conclusion", id: "manuals_and_specifications_conclusion" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `
  let fruits = ["Apple", "Banana"];

  // Adding an element to the end of the array
  fruits.push("Orange");
  
  // Removing the last element from the array
  let removed = fruits.pop();
  
  console.log(fruits); // Output: ["Apple", "Banana"]
  console.log(removed); // Output: "Orange"
  `;
  code1: string = `
// Asynchronous function that resolves after a specified delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Asynchronous function that fetches data from an API
async function fetchData() {
  await delay(2000); // Simulate a delay of 2 seconds
  return { name: "John", age: 30 };
}

// Fetch data asynchronously and handle the result
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
`;

  code2: string = `
// Check if Geolocation API is supported
if ("geolocation" in navigator) {
  // Retrieve current position
  navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  }, error => {
    console.error("Error:", error.message);
  });
} else {
  console.error("Geolocation is not supported");
}
`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }

}
