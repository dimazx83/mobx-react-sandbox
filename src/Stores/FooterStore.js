import { observable, action } from "mobx";

export class FooterStore {
  @observable state = {
    activeMode: "Add",
    activeBehaviour: "All"
  };

  @action changeMode(id) {
    if (this.mode.state.activeMode === id) this.mode.state.activeMode = "none";
    else this.mode.state.activeMode = id;
  }

  @action changeBehaviour(id) {
    this.behaviour.state.activeBehaviour = id;
  }
}
