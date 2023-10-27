import {
  RpgEvent,
  EventData,
  RpgPlayer,
  ShapePositioning,
  RpgShape,
  Speed,
  Move,
} from "@rpgjs/server";

@EventData({
  name: "EV-3",
})
export default class CatEvent extends RpgEvent {
  onInit() {
    this.setGraphic("cat");
    this.setHitbox(16, 16);
    //this.infiniteMoveRoute([ Move.tileRandom() ])
    this.speed = Speed.Slow;
    this.attachShape({
      height: 100,
      width: 100,
      positioning: ShapePositioning.Center,
    });
  }

  onDetectInShape(player: RpgPlayer) {
    console.log("in", player.id);
    this.moveTo(player).subscribe();
  }

  onDetectOutShape(player: RpgPlayer) {
    console.log("out", player.id);
  }
}
