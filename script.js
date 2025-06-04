let clickCount = 0;

function handleClick() {
  const msg = document.getElementById("message");
  const envelope = document.getElementById("envelope");
  const flap = document.getElementById("flap");
  const letter = document.getElementById("letter");
  const music = document.getElementById("bg-music");

  clickCount++;

  if (clickCount === 1) {
    msg.textContent = "เอ๊ะ อะไรนะ?";
  } else if (clickCount === 2) {
    msg.style.opacity = 0;
    envelope.style.display = "block";
  } else if (clickCount === 3) {
    flap.style.transform = "rotateX(180deg)";
    letter.style.opacity = 1;
    letter.style.transform = "translateY(-20px)";
    envelope.style.animation = "none";

    music.play().catch(() => {
      console.log("Autoplay ถูกบล็อก - ต้องคลิกอีกครั้ง");
    });
  }
}