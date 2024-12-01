export class article {
    title: string;
    photo: string;
    datetime: Date;
  
    constructor(title: string, photo: string, datetime: Date) {
      this.title = title;
      this.photo = photo;
      this.datetime = datetime;
    }
  }
  export const articlelist: article[] = [];
  export const articlelist2: article[] = [];
  