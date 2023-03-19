// 导入所需的依赖
import { spawn } from 'child_process'
import vscode, { window } from 'vscode'
import { playSoundUrlByText } from './play'

// import a48 from '../res/mp3/a48.mp3'

// 音频文件路径
// const audioPath = path.join(__dirname, '../res/mp3/a48.mp3')

// 播放音频函数
function playAudio(url: string) {
  const player = spawn('afplay', [url]) // Mac上的afplay命令行工具用于播放音频
  player.on('close', () => {
    // console.log('音频播放完成')
  })
}

async function activate(context) {
  // window.showInformationMessage(audioPath)
  // 注册按键监听器
  // const disposable = vscode.commands.registerCommand('extension.playPiano', () => {
  //   playAudio()
  // })

  // 监听键盘事件
  const keyboardListener = vscode.window.onDidChangeActiveTextEditor((event) => {
    if (event) {
      const disposable2 = vscode.workspace.onDidChangeTextDocument((event) => {
        const change = event.contentChanges[0] // 获取最近一次的更改
        const newText = change.text // 获取最近一次更改添加的文本内容
        const url = playSoundUrlByText(newText)
        if (url)
          playAudio(url)

        window.showInformationMessage(newText)
      })
      context.subscriptions.push(disposable2)
    }
  })
  context.subscriptions.push(keyboardListener)

  // context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
