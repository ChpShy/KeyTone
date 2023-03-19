import { spawn } from 'child_process'
import vscode from 'vscode'
import { playSoundUrlByText } from './play'

// play audio file
function playAudio(url: string) {
  const player = spawn('afplay', [url]) // Only for Mac

  player.on('close', () => {
    player.kill()
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
