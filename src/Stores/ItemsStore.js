import { observable, action } from "mobx";

export class ItemsStore {
  @observable items = [];

  constructor() {
    this.setDefault(JSON.parse(localStorage.getItem("todos")));
  }

  getCompletedItems() {
    return this.items.filter((item) => item.complete);
  }

  getRemainItems() {
    return this.items.filter((item) => !item.complete);
  }

  filtration(word, filteredCollection) {
    return filteredCollection.filter((todo) => {
      return todo.title.toLowerCase().startsWith(word.toLowerCase());
    });
  }

  @action setDefault(list) {
    this.items = list || [
      // если ничего не передано то дефолт список
      { title: "Build a React App", complete: false },
      { title: "Learn React", complete: false },
      { title: "Learn Javascript", complete: false }
    ];
  }

  @action addItem(title) {
    this.items.unshift({ title: title, complete: false });
  }
}
