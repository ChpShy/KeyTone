import { spawn } from 'child_process'
import vscode from 'vscode'
import { playSoundUrlByText } from './play'

const maxProcessCount = 10
const processList: { pid: number | undefined; process: any }[] = []
// play audio file
function playAudio(url: string) {
  if (processList.length > maxProcessCount) {
    const firstProcess = processList.shift()
    firstProcess?.process.kill('SIGKILL')
  }
  const player = spawn('afplay', [url], { detached: true }) // Only for Mac
  processList.push({
    pid: player.pid,
    process: player,
  })
  player.on('close', () => {
    player.kill('SIGKILL')
    const index = processList.findIndex(process => process.pid === player.pid)
    if (index > -1)
      processList.splice(index, 1)
  })
}

async function activate(context) {
  const keyboardListener = vscode.window.onDidChangeActiveTextEditor((event) => {
    if (event) {
      const disposable2 = vscode.workspace.onDidChangeTextDocument((event) => {
        const change = event.contentChanges[0]
        const newText = change.text
        const url = playSoundUrlByText(newText)
        if (url)
          playAudio(url)
      })
      context.subscriptions.push(disposable2)
    }
  })
  context.subscriptions.push(keyboardListener)
}
exports.activate = activate

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
