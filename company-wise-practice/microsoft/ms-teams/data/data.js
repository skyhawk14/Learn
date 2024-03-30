var log = window.console.log
// generate dummy data of microsoft teams chat
const generateDummyChatData = () => {
  const chatData = [];

  // Generate dummy messages
  for (let i = 1; i <= 10; i++) {
    const message = {
      id: i,
      sender: `sender name ${i}`,
      content: `message content ${i}`,
      timestamp: `${new Date().toLocaleTimeString()}`
    };
    chatData.push(message);
  }
  log(chatData)
}

generateDummyChatData()
