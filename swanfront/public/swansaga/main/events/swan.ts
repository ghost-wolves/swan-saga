import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-4",
  hitbox: {
    width: 32,
    height: 16,
  },
})
export default class SwanEvent extends RpgEvent {
  onInit() {
    this.setGraphic("swan");
  }
  async onAction(player: RpgPlayer) {
    await player.showText("You have saved the world.", {
      talkWith: this,
    });
  }
}
