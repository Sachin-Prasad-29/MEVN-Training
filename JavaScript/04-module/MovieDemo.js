import { Movie } from "./movie";

const movie1 = new Movie("XYZ", ["A1", "A2", "A3", "A4"], 2020, 1200000);
movie1.addToCast("A5");
movie1.addTOCOllection(5000);

const movie2 = new Movie("ABC", ["B1", "B2", "B3", "B4"], 2021, 1500000);
movie2.addToCast("B5");
movie2.addTOCOllection(5000);

console.log(movie1);
console.log(movie2);
