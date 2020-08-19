export class articleInfo {
  title: string;
  content: string;
  date: string;
  name: string;
  username: string;
  constructor(data: any) {
    this.title = data.category.title;
    this.content = data.content;
    this.date = data.date;
    this.name = data.name;
    this.username = data.userinfo.name;
  }
}
