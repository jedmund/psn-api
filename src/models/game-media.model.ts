export interface GameMedia {
  audios: unknown[]
  videos: unknown[]
  images: Array<{
    url: string
    format: string
    type: string
  }>
}
