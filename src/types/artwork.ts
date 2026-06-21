export interface Artwork {
  id: number
  src: string
  title: string
  titleZh: string
  year: string
  medium: '油画' | '流体画'
  dimensions?: string
}

export const MEDIUM_EN: Record<string, string> = {
  '油画': 'Oil on Canvas',
  '流体画': 'Fluid Art',
}
