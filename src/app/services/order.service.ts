import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }


foodDetails = [
{

    id:1,
    foodName:"PIZZA",
    foodDetails:"YUMMYY .",
    foodPrice:200,
    foodImg:"https://media.istockphoto.com/photos/whole-italian-pizza-on-wooden-table-with-ingredients-picture-id1048400936?k=20&m=1048400936&s=612x612&w=0&h=fPRKreYthnwvfa1x9WT6e13PtTSvK9ClhxkKOM6zhSk="
},
{

  id:2,
  foodName:"BURGER",
  foodDetails:"TASTY .",
  foodPrice:300,
  foodImg:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{

  id:3,
  foodName:"BROWNIE",
  foodDetails:"SWEETY .",
  foodPrice:250,
  foodImg:"https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJvd25pZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{

  id:4,
  foodName:"ICECREAM",
  foodDetails:"MELTING .",
  foodPrice:400,
  foodImg:"https://images.unsplash.com/photo-1598268121084-c8f7126e0cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{

  id:5,
  foodName:"OREO SHAKE",
  foodDetails:"CRUNCHY OREO .",
  foodPrice:100,
  foodImg:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{

  id:6,
  foodName:"APPLE JUCIE",
  foodDetails:"APPLE .",
  foodPrice:150,
  foodImg:"https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},


]

}
