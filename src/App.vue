<template>
  <div class="main-container">
    <div class="aura-background"></div>
    <div class="sparkle-container">
      <div class="sparkle"></div>
      <div class="sparkle"></div>
      <div class="sparkle"></div>
      <div class="sparkle"></div>
      <div class="sparkle"></div>
    </div>
    <div class="floating-hearts">
      <div class="heart">♡</div>
      <div class="heart">♡</div>
      <div class="heart">♡</div>
    </div>
    <div id="app">
      <div class="switch-container">
        <div class="switch-wrapper">
          <input type="checkbox" id="switch" v-model="isAddTaskActive" @change="handleSwitch">
          <label for="switch" class="switch-label">
            <span class="switch-button"></span>
            <span class="switch-text home">Home</span>
            <span class="switch-text add-task">Add Task</span>
          </label>
        </div>
      </div>
      <router-view/>
    </div>
    <div class="pixel-rabbit">
      <img src="@/assets/rabbit.gif" class="rabbit" alt="pixel rabbit">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAddTaskActive: false
    }
  },
  methods: {
    handleSwitch() {
      this.$router.push(this.isAddTaskActive ? '/addTask' : '/')
    },
    addFloatingAnimals() {
      const animals = ['🦄', '🐱', '🦋', '🐰', '🌸', '💝', '🎀'];
      const container = document.createElement('div');
      container.className = 'cosmic-animals';
      
      for (let i = 0; i < 20; i++) {
        const animal = document.createElement('div');
        animal.className = 'cosmic-animal';
        animal.textContent = animals[Math.floor(Math.random() * animals.length)];
        animal.style.left = `${Math.random() * 100}vw`;
        animal.style.top = `${Math.random() * 100}vh`;
        animal.style.animationDelay = `${Math.random() * 20}s`;
        animal.style.fontSize = `${Math.random() * (30 - 20) + 20}px`;
        container.appendChild(animal);
      }
      
      document.body.appendChild(container);
    },
    addSparkles() {
      setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = ['✨', '💫', '⭐️', '🌟', '💖', '💕', '✨'][Math.floor(Math.random() * 7)];
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        sparkle.style.fontSize = `${Math.random() * (24 - 16) + 16}px`;
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
      }, 200);
    }
  },
  watch: {
    $route(to) {
      this.isAddTaskActive = to.path === '/addTask'
    }
  },
  mounted() {
    this.addFloatingAnimals();
    this.addSparkles();
    // Tenor script'ini dinamik olarak yükle
    const script = document.createElement('script');
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
}
</script>

<style>
/* Temel stiller */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #fff;
  position: relative;
  overflow: hidden;
}

/* Container stilleri */
.main-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.aura-background {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vmax;
  height: 100vmax;
  background: radial-gradient(circle at center,
    rgba(255, 182, 255, 0.8) 0%,    
    rgba(255, 105, 180, 0.7) 30%,   
    rgba(255, 20, 147, 0.5) 60%,    
    rgba(255, 255, 255, 0) 80%      
  );
  animation: pulseAura 8s ease-in-out infinite;
}

.sparkle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: sparkleAnimation 4s ease-in-out infinite;
}

.sparkle:nth-child(1) { left: 20%; top: 30%; animation-delay: 0s; }
.sparkle:nth-child(2) { left: 40%; top: 40%; animation-delay: 1s; }
.sparkle:nth-child(3) { left: 60%; top: 60%; animation-delay: 2s; }
.sparkle:nth-child(4) { left: 80%; top: 20%; animation-delay: 3s; }
.sparkle:nth-child(5) { left: 50%; top: 50%; animation-delay: 1.5s; }

.floating-hearts {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.heart {
  position: absolute;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  animation: floatHeart 10s linear infinite;
}

.heart:nth-child(1) { left: 30%; animation-delay: 0s; }
.heart:nth-child(2) { left: 50%; animation-delay: 3s; }
.heart:nth-child(3) { left: 70%; animation-delay: 6s; }

@keyframes floatHeart {
  0% {
    transform: translateY(100vh) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) scale(0.5);
    opacity: 0;
  }
}

@keyframes sparkleAnimation {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1) rotate(180deg);
    opacity: 0.8;
    box-shadow: 
      0 0 4px #fff,
      0 0 8px #fff,
      0 0 12px #fff,
      0 0 16px #ff69b4,
      0 0 20px #ff69b4;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

@keyframes pulseAura {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 800px;
  width: 90%;
  margin: 20px auto;
  position: relative;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(4px);
}

.switch-container {
  text-align: center;
  margin: 40px 0;
}

.switch-wrapper {
  display: inline-block;
  position: relative;
}

.switch-label {
  display: flex;
  align-items: center;
  width: 280px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 20px rgba(255, 182, 193, 0.5),
              inset 0 0 10px rgba(255, 105, 180, 0.2);
  transition: all 0.3s ease;
}

.switch-button {
  position: absolute;
  left: 5px;
  width: 135px;
  height: 50px;
  background: linear-gradient(45deg, #ffa6d3, #ff8ac6);
  border-radius: 25px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 15px rgba(255, 105, 180, 0.3);
}

.switch-text {
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
  color: #ff69b4;
  text-shadow: 0 0 5px rgba(255, 182, 193, 0.3);
  transition: all 0.3s ease;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked + .switch-label .switch-button {
  left: 140px;
}

input[type="checkbox"]:checked + .switch-label .switch-text.home {
  color: #ff69b4;
}

input[type="checkbox"]:checked + .switch-label .switch-text.add-task {
  color: white;
}

input[type="checkbox"]:not(:checked) + .switch-label .switch-text.home {
  color: white;
}

.switch-label:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 25px rgba(255, 182, 193, 0.6);
}

.switch-label:hover .switch-button {
  box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
}

/* Eski nav stillerini kaldırabilirsiniz */
.mainNav {
  display: none;
}

/* Floating Animals Animation */
.cosmic-animals {
  position: fixed;
  pointer-events: none;
  z-index: 1;
}

.cosmic-animal {
  position: absolute;
  animation: float 20s linear infinite;
  opacity: 0.8;
  z-index: 100;
  filter: drop-shadow(0 0 5px rgba(255, 182, 193, 0.5));
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(50px, -50px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(100px, 0) rotate(180deg) scale(1);
  }
  75% {
    transform: translate(50px, 50px) rotate(270deg) scale(1.1);
  }
  100% {
    transform: translate(0, 0) rotate(360deg) scale(1);
  }
}

/* Sparkle Effects */
.sparkle {
  position: absolute;
  pointer-events: none;
  animation: sparkleAnim 2s linear infinite;
  z-index: 99;
  opacity: 0.9;
  filter: drop-shadow(0 0 3px rgba(255, 182, 193, 0.7));
}

@keyframes sparkleAnim {
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  25% { transform: scale(1) rotate(90deg); opacity: 0.9; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
  75% { transform: scale(1) rotate(270deg); opacity: 0.9; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
}

/* Softer button gradients */
.switch-button {
  background: linear-gradient(45deg, #ffa6d3, #ff8ac6);
  /* ... existing styles ... */
}

/* Add sparkles to switch */
.switch-label::after {
  content: '✨';
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  animation: twinkle 1.5s infinite;
}

.switch-label::before {
  content: '🌟';
  position: absolute;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
  animation: twinkle 1.5s infinite 0.5s;
}

.pixel-rabbit {
  position: fixed;
  bottom: 100px;
  z-index: 9999;
  pointer-events: none;
  animation: walkingRabbit 15s linear infinite;
}

.rabbit {
  width: 64px;  /* GIF boyutunu ayarlayabilirsiniz */
  height: 64px;
  image-rendering: pixelated;
}

/* Tenor container'ının arka planını şeffaf yap */
.tenor-gif-embed {
  background: transparent !important;
}

/* İframe'in arka planını da şeffaf yap */
.tenor-gif-embed iframe {
  background: transparent !important;
}

@keyframes walkingRabbit {
  0% {
    left: -100px;
    transform: scaleX(1);
  }
  45% {
    transform: scaleX(1);
  }
  50% {
    left: calc(100% + 100px);
    transform: scaleX(-1);
  }
  95% {
    transform: scaleX(-1);
  }
  100% {
    left: -100px;
    transform: scaleX(1);
  }
}

/* Input alanları için daha soft stil */
input, textarea {
  background: rgba(255, 255, 255, 0.6) !important;
  border: 1px solid rgba(255, 192, 203, 0.3) !important;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  background: rgba(255, 255, 255, 0.8) !important;
  border-color: rgba(255, 192, 203, 0.5) !important;
  box-shadow: 0 0 10px rgba(255, 192, 203, 0.2) !important;
}

/* Add Task butonu için daha soft gradient */
button {
  background: linear-gradient(45deg, 
    rgba(255, 105, 180, 0.8), 
    rgba(255, 182, 193, 0.8)
  ) !important;
  border: none !important;
  transition: all 0.3s ease;
}

button:hover {
  background: linear-gradient(45deg, 
    rgba(255, 105, 180, 0.9), 
    rgba(255, 182, 193, 0.9)
  ) !important;
  transform: translateY(-2px);
}

.filter-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

.filter-nav button {
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  background: rgba(255, 255, 255, 0.5) !important;
  color: #ff69b4;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  position: relative;
  backdrop-filter: blur(2px);
}

.filter-nav button:hover {
  background: rgba(255, 255, 255, 0.8) !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);
}

.filter-nav button.active {
  background: linear-gradient(45deg, 
    rgba(255, 105, 180, 0.9), 
    rgba(255, 182, 193, 0.9)
  ) !important;
  color: white;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
}

/* Add sparkles to active button */
.filter-nav button.active::after {
  content: '✨';
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
}
</style>



