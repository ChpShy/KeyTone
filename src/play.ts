import { soundKeyMap } from './sounds'

export const playSoundUrlByText = (text: string) => {
  if (!text)
    return

  if (text.length > 1)
    text = text[text.length - 1]

  return soundKeyMap[text.toUpperCase()]
}
