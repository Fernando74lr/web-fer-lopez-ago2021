
const greeting = () => {
    let hour = new Date().getHours();
    if (hour < 12) alert('Good morning 👋');
    if (hour >= 12 && hour < 18) alert('Good afternoon 👋');
    if (hour >= 18 && hour < 20) alert('Good evening 🌗');
    if (hour >= 20) alert('Good night 🌙');
}
