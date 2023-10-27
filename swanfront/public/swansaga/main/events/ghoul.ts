import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-5",
  hitbox: {
    width: 32,
    height: 16,
  },
})
export default class GhoulEvent extends RpgEvent {
  onInit() {
    this.setGraphic("ghoul");
  }
  async onAction(player: RpgPlayer) {
    await player.showText("Preorder Cyberpet Quest from Dead Alive Games!", {
      talkWith: this,
    });
  }
}
