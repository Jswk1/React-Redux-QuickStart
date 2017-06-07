export function createMessage(message) {
    let messageObject = {
         date: new Date().toISOString(), 
         message 
    }
    return { type: "CREATE_MESSAGE", data: messageObject }
}