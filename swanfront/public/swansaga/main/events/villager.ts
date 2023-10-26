import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('hero')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Welcome to Swan Saga! Have some gold!', {
            talkWith: this
        })
        player.gold += 10
    }
}