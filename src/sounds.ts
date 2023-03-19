import path from 'path'

// 音频文件路径
const audioPath = path.join(__dirname, 'mp3/')

export const soundKeyMap = {
  0: `${audioPath}a48.mp3`,
  1: `${audioPath}a49.mp3`,
  2: `${audioPath}a50.mp3`,
  3: `${audioPath}a51.mp3`,
  4: `${audioPath}a52.mp3`,
  5: `${audioPath}a53.mp3`,
  6: `${audioPath}a54.mp3`,
  7: `${audioPath}a55.mp3`,
  8: `${audioPath}a56.mp3`,
  9: `${audioPath}a57.mp3`,
  Q: `${audioPath}a81.mp3`,
  W: `${audioPath}a87.mp3`,
  E: `${audioPath}a69.mp3`,
  R: `${audioPath}a82.mp3`,
  T: `${audioPath}a84.mp3`,
  Y: `${audioPath}a89.mp3`,
  U: `${audioPath}a85.mp3`,
  I: `${audioPath}a73.mp3`,
  O: `${audioPath}a79.mp3`,
  P: `${audioPath}a80.mp3`,
  A: `${audioPath}a65.mp3`,
  S: `${audioPath}a83.mp3`,
  D: `${audioPath}a68.mp3`,
  F: `${audioPath}a70.mp3`,
  G: `${audioPath}a71.mp3`,
  H: `${audioPath}a72.mp3`,
  J: `${audioPath}a74.mp3`,
  K: `${audioPath}a75.mp3`,
  L: `${audioPath}a76.mp3`,
  Z: `${audioPath}a90.mp3`,
  X: `${audioPath}a88.mp3`,
  C: `${audioPath}a67.mp3`,
  V: `${audioPath}a86.mp3`,
  B: `${audioPath}a66.mp3`,
  N: `${audioPath}a78.mp3`,
  M: `${audioPath}a77.mp3`,
}

export default [
  { id: 1, name: 'C2', keyCode: '49', key: '1', url: `${audioPath}a49.mp3`, type: 'white' },
  { id: 2, name: 'D2', keyCode: '50', key: '2', url: `${audioPath}a50.mp3`, type: 'white' },
  { id: 3, name: 'E2', keyCode: '51', key: '3', url: `${audioPath}a51.mp3`, type: 'white' },
  { id: 4, name: 'F2', keyCode: '52', key: '4', url: `${audioPath}a52.mp3`, type: 'white' },
  { id: 5, name: 'G2', keyCode: '53', key: '5', url: `${audioPath}a53.mp3`, type: 'white' },
  { id: 6, name: 'A2', keyCode: '54', key: '6', url: `${audioPath}a54.mp3`, type: 'white' },
  { id: 7, name: 'B2', keyCode: '55', key: '7', url: `${audioPath}a55.mp3`, type: 'white' },
  { id: 8, name: 'C3', keyCode: '56', key: '8', url: `${audioPath}a56.mp3`, type: 'white' },
  { id: 9, name: 'D3', keyCode: '57', key: '9', url: `${audioPath}a57.mp3`, type: 'white' },
  { id: 10, name: 'E3', keyCode: '48', key: '0', url: `${audioPath}a48.mp3`, type: 'white' },
  { id: 26, name: 'F3', keyCode: '81', key: 'Q', url: `${audioPath}a81.mp3`, type: 'white' },
  { id: 32, name: 'G3', keyCode: '87', key: 'W', url: `${audioPath}a87.mp3`, type: 'white' },
  { id: 14, name: 'A3', keyCode: '69', key: 'E', url: `${audioPath}a69.mp3`, type: 'white' },
  { id: 27, name: 'B3', keyCode: '82', key: 'R', url: `${audioPath}a82.mp3`, type: 'white' },
  { id: 29, name: 'C4', keyCode: '84', key: 'T', url: `${audioPath}a84.mp3`, type: 'white' },
  { id: 34, name: 'D4', keyCode: '89', key: 'Y', url: `${audioPath}a89.mp3`, type: 'white' },
  { id: 30, name: 'E4', keyCode: '85', key: 'U', url: `${audioPath}a85.mp3`, type: 'white' },
  { id: 18, name: 'F4', keyCode: '73', key: 'I', url: `${audioPath}a73.mp3`, type: 'white' },
  { id: 24, name: 'G4', keyCode: '79', key: 'O', url: `${audioPath}a79.mp3`, type: 'white' },
  { id: 25, name: 'A4', keyCode: '80', key: 'P', url: `${audioPath}a80.mp3`, type: 'white' },
  { id: 10, name: 'B4', keyCode: '65', key: 'A', url: `${audioPath}a65.mp3`, type: 'white' },
  { id: 28, name: 'C5', keyCode: '83', key: 'S', url: `${audioPath}a83.mp3`, type: 'white' },
  { id: 13, name: 'D5', keyCode: '68', key: 'D', url: `${audioPath}a68.mp3`, type: 'white' },
  { id: 15, name: 'E5', keyCode: '70', key: 'F', url: `${audioPath}a70.mp3`, type: 'white' },
  { id: 16, name: 'F5', keyCode: '71', key: 'G', url: `${audioPath}a71.mp3`, type: 'white' },
  { id: 17, name: 'G5', keyCode: '72', key: 'H', url: `${audioPath}a72.mp3`, type: 'white' },
  { id: 19, name: 'A5', keyCode: '74', key: 'J', url: `${audioPath}a74.mp3`, type: 'white' },
  { id: 20, name: 'B5', keyCode: '75', key: 'K', url: `${audioPath}a75.mp3`, type: 'white' },
  { id: 21, name: 'C6', keyCode: '76', key: 'L', url: `${audioPath}a76.mp3`, type: 'white' },
  { id: 35, name: 'D6', keyCode: '90', key: 'Z', url: `${audioPath}a90.mp3`, type: 'white' },
  { id: 33, name: 'E6', keyCode: '88', key: 'X', url: `${audioPath}a88.mp3`, type: 'white' },
  { id: 12, name: 'F6', keyCode: '67', key: 'C', url: `${audioPath}a67.mp3`, type: 'white' },
  { id: 31, name: 'G6', keyCode: '86', key: 'V', url: `${audioPath}a86.mp3`, type: 'white' },
  { id: 11, name: 'A6', keyCode: '66', key: 'B', url: `${audioPath}a66.mp3`, type: 'white' },
  { id: 23, name: 'B6', keyCode: '78', key: 'N', url: `${audioPath}a78.mp3`, type: 'white' },
  { id: 22, name: 'C7', keyCode: '77', key: 'M', url: `${audioPath}a77.mp3`, type: 'white' },

  // { id: 36, name: 'C#2', keyCode: 'b49', key: '⇧<br>+<br>1', url: `${audioPath}b49.mp3`, type: 'black' },
  // { id: 37, name: 'D#2', keyCode: 'b50', key: '⇧<br>+<br>2', url: `${audioPath}b50.mp3`, type: 'black' },
  // { id: 38, name: 'F#2', keyCode: 'b52', key: '⇧<br>+<br>4', url: `${audioPath}b52.mp3`, type: 'black' },
  // { id: 39, name: 'G#2', keyCode: 'b53', key: '⇧<br>+<br>5', url: `${audioPath}b53.mp3`, type: 'black' },
  // { id: 40, name: 'A#2', keyCode: 'b54', key: '⇧<br>+<br>6', url: `${audioPath}b54.mp3`, type: 'black' },
  // { id: 41, name: 'C#3', keyCode: 'b56', key: '⇧<br>+<br>8', url: `${audioPath}b56.mp3`, type: 'black' },
  // { id: 42, name: 'D#3', keyCode: 'b57', key: '⇧<br>+<br>9', url: `${audioPath}b57.mp3`, type: 'black' },
  // { id: 43, name: 'F#3', keyCode: 'b81', key: '⇧<br>+<br>Q', url: `${audioPath}b81.mp3`, type: 'black' },
  // { id: 44, name: 'G#3', keyCode: 'b87', key: '⇧<br>+<br>W', url: `${audioPath}b87.mp3`, type: 'black' },
  // { id: 45, name: 'A#3', keyCode: 'b69', key: '⇧<br>+<br>E', url: `${audioPath}b69.mp3`, type: 'black' },
  // { id: 46, name: 'C#4', keyCode: 'b84', key: '⇧<br>+<br>T', url: `${audioPath}b84.mp3`, type: 'black' },
  // { id: 47, name: 'D#4', keyCode: 'b89', key: '⇧<br>+<br>Y', url: `${audioPath}b89.mp3`, type: 'black' },
  // { id: 48, name: 'F#4', keyCode: 'b73', key: '⇧<br>+<br>I', url: `${audioPath}b73.mp3`, type: 'black' },
  // { id: 49, name: 'G#4', keyCode: 'b79', key: '⇧<br>+<br>O', url: `${audioPath}b79.mp3`, type: 'black' },
  // { id: 50, name: 'A#4', keyCode: 'b80', key: '⇧<br>+<br>P', url: `${audioPath}b80.mp3`, type: 'black' },
  // { id: 51, name: 'C#5', keyCode: 'b83', key: '⇧<br>+<br>S', url: `${audioPath}b83.mp3`, type: 'black' },
  // { id: 52, name: 'D#5', keyCode: 'b68', key: '⇧<br>+<br>D', url: `${audioPath}b68.mp3`, type: 'black' },
  // { id: 53, name: 'F#5', keyCode: 'b71', key: '⇧<br>+<br>G', url: `${audioPath}b71.mp3`, type: 'black' },
  // { id: 54, name: 'G#5', keyCode: 'b72', key: '⇧<br>+<br>H', url: `${audioPath}b72.mp3`, type: 'black' },
  // { id: 55, name: 'A#5', keyCode: 'b74', key: '⇧<br>+<br>J', url: `${audioPath}b74.mp3`, type: 'black' },
  // { id: 56, name: 'C#6', keyCode: 'b76', key: '⇧<br>+<br>L', url: `${audioPath}b76.mp3`, type: 'black' },
  // { id: 57, name: 'D#6', keyCode: 'b90', key: '⇧<br>+<br>Z', url: `${audioPath}b90.mp3`, type: 'black' },
  // { id: 58, name: 'F#6', keyCode: 'b67', key: '⇧<br>+<br>C', url: `${audioPath}b67.mp3`, type: 'black' },
  // { id: 59, name: 'G#6', keyCode: 'b86', key: '⇧<br>+<br>V', url: `${audioPath}b86.mp3`, type: 'black' },
  // { id: 60, name: 'A#6', keyCode: 'b66', key: '⇧<br>+<br>B', url: `${audioPath}b66.mp3`, type: 'black' },
]

export const NotesMap = [
  { name: 'C2', file: 'a49.mp3' },
  { name: 'D2', file: 'a50.mp3' },
  { name: 'E2', file: 'a51.mp3' },
  { name: 'F2', file: 'a52.mp3' },
  { name: 'G2', file: 'a53.mp3' },
  { name: 'A2', file: 'a54.mp3' },
  { name: 'B2', file: 'a55.mp3' },
  { name: 'C3', file: 'a56.mp3' },
  { name: 'D3', file: 'a57.mp3' },
  { name: 'E3', file: 'a48.mp3' },
  { name: 'F3', file: 'a81.mp3' },
  { name: 'G3', file: 'a87.mp3' },
  { name: 'A3', file: 'a69.mp3' },
  { name: 'B3', file: 'a82.mp3' },
  { name: 'C4', file: 'a84.mp3' },
  { name: 'D4', file: 'a89.mp3' },
  { name: 'E4', file: 'a85.mp3' },
  { name: 'F4', file: 'a73.mp3' },
  { name: 'G4', file: 'a79.mp3' },
  { name: 'A4', file: 'a80.mp3' },
  { name: 'B4', file: 'a65.mp3' },
  { name: 'C5', file: 'a83.mp3' },
  { name: 'D5', file: 'a68.mp3' },
  { name: 'E5', file: 'a70.mp3' },
  { name: 'F5', file: 'a71.mp3' },
  { name: 'G5', file: 'a72.mp3' },
  { name: 'A5', file: 'a74.mp3' },
  { name: 'B5', file: 'a75.mp3' },
  { name: 'C6', file: 'a76.mp3' },
  { name: 'D6', file: 'a90.mp3' },
  { name: 'E6', file: 'a88.mp3' },
  { name: 'F6', file: 'a67.mp3' },
  { name: 'G6', file: 'a86.mp3' },
  { name: 'A6', file: 'a66.mp3' },
  { name: 'B6', file: 'a78.mp3' },
  { name: 'C7', file: 'a77.mp3' },

  { name: 'C#2', file: 'b49.mp3' },
  { name: 'D#2', file: 'b50.mp3' },
  { name: 'F#2', file: 'b52.mp3' },
  { name: 'G#2', file: 'b53.mp3' },
  { name: 'A#2', file: 'b54.mp3' },
  { name: 'C#3', file: 'b56.mp3' },
  { name: 'D#3', file: 'b57.mp3' },
  { name: 'F#3', file: 'b81.mp3' },
  { name: 'G#3', file: 'b87.mp3' },
  { name: 'A#3', file: 'b69.mp3' },
  { name: 'C#4', file: 'b84.mp3' },
  { name: 'D#4', file: 'b89.mp3' },
  { name: 'F#4', file: 'b73.mp3' },
  { name: 'G#4', file: 'b79.mp3' },
  { name: 'A#4', file: 'b80.mp3' },
  { name: 'C#5', file: 'b83.mp3' },
  { name: 'D#5', file: 'b68.mp3' },
  { name: 'F#5', file: 'b71.mp3' },
  { name: 'G#5', file: 'b72.mp3' },
  { name: 'A#5', file: 'b74.mp3' },
  { name: 'C#6', file: 'b76.mp3' },
  { name: 'D#6', file: 'b90.mp3' },
  { name: 'F#6', file: 'b67.mp3' },
  { name: 'G#6', file: 'b86.mp3' },
  { name: 'A#6', file: 'b66.mp3' },
]
