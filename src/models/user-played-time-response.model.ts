import type { TitleConcept } from './title-concept.model'
import type { GameMedia } from './game-media.model';

export interface GetUserPlayedTimeResponse {
  /**
   * The title ID of this game
   * @example CUSA26431_00
   */
  titleId: string

  /** Default name for the title */
  name: string

  /** Localized name for the title */
  localizedName: string

  /** URL to game's console launch screen
   * @example 
   */
  imageUrl: string

  /** URL to localized game's console launch screen. Will default to imageURL if not unique.
   * @example
   */
  localizedImageUrl: string

  /** Type of the game being played. Can be ps5_native_game, ps4_game, or none */
  category: "ps5_native_game" | "ps4_game" | "none"

  /** Service where this game was acquiured from: EA Access, none(purchased/none_purchased, ps_plus, other) */
  service: string

  /** Metadata about this game */
  concept: TitleConcept

  /** Media associated with this game */
  media: GameMedia

  /** The first time the game was played */
  firstPlayedDateTime: string

  /** The last time the game was played */
  lastPlayedDateTime: string;

  /** The duration that the game was played, expressed as an ISO 8601 duration string.
   * Reference: https://tc39.es/proposal-temporal/docs/duration.html
   */
  playDuration: string
}
