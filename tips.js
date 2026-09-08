const tips = [
  "Тиск у шинах впливає на витрату пального: перевіряйте його регулярно.",
  "Плавне прискорення та гальмування економлят до 20% палива.",
  "Використання кондиціонера збільшує витрату пального приблизно на 0.5–1 л/100 км.",
  "Намагайтеся не перевозити в багажнику зайві важкі речі.",
  "Регулярно міняйте повітряний фільтр для оптимальної роботи двигуна.",
  "На значку пального на панелі приладів, шланг вказує з якої сторони кришка баку."
];

function showRandomTip() {
  const tipElement = document.getElementById("tip");
  
  if (tipElement) {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.textContent = tips[randomIndex];
  } else {
    console.error("Елемент з id 'tip' не знайдено в DOM!");
  }
}

// Запускаємо відразу при завантаженні сторінки
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showRandomTip);
} else {
  showRandomTip();
}