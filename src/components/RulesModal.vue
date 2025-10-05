<template>
  <teleport to="body">
    <div v-if="open" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <h2>Howell – Rules, Policies & Information</h2>

        <!-- How to Play -->
        <h3>How to Play</h3>
        <p>
          To play Howell, users must <strong>sign up and log in</strong>.  
          Once logged in, click on <strong>“Topics”</strong> in the navigation bar.  
          You may choose from different quiz topics, including weekly competitions.  
        </p>
        <p>
          At the end of every quiz, your <strong>score and performance</strong> are displayed.  
        </p>

        <!-- Rules of Competition -->
        <h3>Rules of Competition</h3>
        <p>
          Participation in Howell competitions is free. No entry fee is required.
          Winners are determined based on skill — quiz performance is calculated using:
          <strong>time spent, correct answers, and number of questions completed</strong>.
        </p>
        <ul>
          <li>Each weekly competition features around 50 questions on a trending athlete.</li>
          <li>The leaderboard ranks players based on accuracy and speed.</li>
          <li>The top leaderboard player of the week wins <strong>20 coins</strong>.</li>
          <li>Coins are withdrawable after accumulating <strong>100+ coins</strong>.</li>
          <li>Rewards must be claimed manually via in-game chat. Howell admins will verify standings before awarding prizes.</li>
        </ul>

        <!-- Reward Structure -->
        <h3>Reward Structure</h3>
        <ul>
          <li>Weekly competition winner: <strong>20 coins</strong>.</li>
          <li>Regular quizzes: earn <strong>2–5 coins</strong> per quiz, depending on frequency.</li>
          <li>Coins have a withdrawable value determined by app growth, set by the admin.</li>
          <li>Withdrawal methods: chat-arranged (bank transfer, PayPal, or other agreed method).</li>
        </ul>

        <!-- Privacy Policy -->
        <h3>Privacy Policy</h3>
        <p>
          Howell respects your privacy. We only collect <strong>basic user data</strong>
          such as your name, email, or phone number. This data is used solely for:
        </p>
        <ul>
          <li>Tracking quiz progress and scores.</li>
          <li>Managing leaderboards and competitions.</li>
          <li>Enabling communication about rewards through in-game chat.</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal data with third-party advertisers or external services.
        </p>

        <!-- User Data Handling -->
        <h3>User Data Handling</h3>
        <p>
          Your data is stored securely using <strong>Firebase Authentication and Firestore</strong>.  
          Only Howell administrators have access to reward verification data.  
          Users may request data removal or account deletion at any time by contacting the developer.
        </p>

        <!-- Disclaimer -->
        <h3>Disclaimer</h3>
        <p>
          Howell is a <strong>skill-based educational and entertainment quiz game</strong>.  
          It does not involve gambling, betting, or random draws of any kind.  
          Rewards are provided only to verified winners and are not guaranteed for every participant.
        </p>
        <p>
          Howell reserves the right to adjust competition details, rules, and rewards at its discretion.
        </p>

        <!-- Contact Information -->
        <h3>Contact Information</h3>
        <p>
          For support, questions, or data requests, please contact:  
          <br />
          <strong>Developer:</strong> Ebuka Jullian  
          <br />
          <strong>Email:</strong> <a href="mailto:ebukaolisaemeka@yahoo.com">ebukaolisaemeka@yahoo.com</a>
        </p>

        <button class="close-btn" @click="$emit('close')">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  open: Boolean
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

h2, h3 {
  margin-bottom: 0.8rem;
  color: #0077cc;
}

p, li {
  margin-bottom: 1rem;
  line-height: 1.5;
}

ul {
  padding-left: 1.5rem;
}

.close-btn {
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.close-btn:hover {
  background-color: #005fa3;
}
</style>
