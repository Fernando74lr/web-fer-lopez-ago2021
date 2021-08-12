
const greeting = () => {
    let hour = new Date().getHours();
    if (hour < 12) console.log('Good morning 👋');
    if (hour >= 12 && hour < 18) console.log('Good afternoon 👋');
    if (hour >= 18 && hour < 20) console.log('Good evening 🌗');
    if (hour >= 20) console.log('Good night 🌙');
}