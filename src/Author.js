const series_list = {
  'J.K.K.Rolling': ['Harry Potter I', 'Harry Potter II'],
  'J.R.R.Tolkien': ['Lord of the rings I', 'Lord of the rings II'],
};

const author_list = [
  {
    name: 'J.K.K.Rolling',
  },
  {
    name: 'J.R.R.Tolkien',
  },
];

class Authors {
  authors = [];
  series = {};
  constructor(authors, series) {
    this.authors = authors;
    this.series = series;
  }

  authorList() {
    return this.authors.map((item) => item.name);
  }

  serieList(name) {
    return this.series[name];
  }
}

export const authors = new Authors(author_list, series_list);
