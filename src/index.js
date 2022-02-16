module.exports = async function App(context) {
// //   await context.sendText('Welcome to Bottender');
// if (context.event.isText) {
// // await context.sendText(context.event.text);
// const msg="I am a very happy"
// await context.sendText(msg);



// }
 if (context.event.isText) {
    // await context.sendText('I know you sent text message.');
   await context.sendMessage({
  text: 'Hello!',
  
});
context.sendImage('https://vaastulochan.com/wp-content/uploads/2019/04/rsz_lochan_astro_logo-1.jpg');
//   await context.sendImage('https://vaastulochan.com/wp-content/uploads/2019/04/rsz_lochan_astro_logo-1.jpg');
  } else {
    await context.sendText('I know you did not send text message.');
  }

}
