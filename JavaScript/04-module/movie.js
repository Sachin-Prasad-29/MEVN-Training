class Movie {
  constructor(name, cast, yearOfRelese, boxOfficeCollection) {
    this.name = name;
    this.cast = cast;
    this.yearOfRelese = yearOfRelese;
    this.boxOfficeCollection = boxOfficeCollection;
  }
  addToCast(newMember) {
    this.cast.push(newMember);
  }
  addTOCOllection(amount) {
    this.boxOfficeCollection += amount;
  }
}

export{
    Movie
};