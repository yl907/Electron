// responsible for front-end part(DOM)
const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// window.versions.ping() is exposed by preload.js, and that function is
const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()