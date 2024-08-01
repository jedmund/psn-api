import type { GameMedia } from './game-media.model'

export interface TitleConcept {
  id: number
  titleIds: string[]
  name: string
  media: GameMedia
  genres: string[]
  localizedName: {
    defaultLanguage: string
    metadata: {
      string: string
    }
  }
  counter: string
  language: string
}
