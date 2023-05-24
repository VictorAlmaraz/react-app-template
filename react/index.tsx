import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
    switch (e.data.eventName) {
        case 'vtex:pageView': {
            break
        }

        default: {
            console.log(e.data);
            break
        }
    }
}

if (canUseDOM) {
    window.addEventListener('message', handleEvents)
}