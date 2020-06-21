export interface PickupAssetsConfig {
    key: string,
    display: {
        frameWidth: number,
        frameHeight: number,
        scale: number
    },
    actions: {
        heal: number
    },
    path: string
}

export const pickupAssets: PickupAssetsConfig[] = [
    {
        key:'hearth',
        display: {
            frameWidth: 125,
            frameHeight: 125,
            scale: 0.1,
        },
        actions: {
            heal: 25
        },  
        path: './assets/Pickups/heart.png'        
    }
]