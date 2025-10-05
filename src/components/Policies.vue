<template>
  <div class="policies-page">
    <h1>Howell Quiz Game - Policies & Rules</h1>

    <!-- Privacy Policy -->
    <section>
      <h2>Privacy Policy</h2>
      <p>
        Howell respects your privacy. We only collect minimal user data — your name, email, or phone number —
        strictly for progress tracking and game functionality. No other personal information is required.
      </p>
      <p>
        Your data will not be shared with third parties except as necessary to provide in-game functionality or
        process rewards. We take reasonable measures to protect your information.
      </p>
    </section>

    <!-- User Data Handling -->
    <section>
      <h2>User Data Handling</h2>
      <p>
        Data collected is stored securely in our Firebase backend. Your quiz progress, scores, and coins are tied to
        your account. Only the admin team can access detailed user records to verify rewards.
      </p>
      <p>
        You may request deletion of your account and associated data by contacting the developer at
        <strong>ebukaolisaemeka@yahoo.com</strong>.
      </p>
    </section>

    <!-- Rules of Competition -->
    <section>
      <h2>Rules of Competition</h2>
      <ul>
        <li>All competitions are skill-based and free to enter.</li>
        <li>Competitions focus on trending athletes and include 50 questions per weekly event.</li>
        <li>Leaderboard scores are calculated based on time spent, correct answers, and completed questions.</li>
        <li>Every winner receives <strong>20 coins</strong>.</li>
        <li>Regular quiz participation increases your coins by 2 to 5 coins per quiz.</li>
        <li>Coins are withdrawable once your balance reaches 100 coins or more.</li>
        <li>Rewards must be claimed via the in-game chat, and the admin team verifies eligibility.</li>
        <li>Howell does not provide gambling, betting, or random draws of any kind.</li>
        <li>The admin reserves the right to adjust competition rules and reward policies at any time.</li>
      </ul>
    </section>

    <!-- How to Play -->
    <section>
      <h2>How to Play</h2>
      <ol>
        <li>Sign up and log in using your email or Facebook account.</li>
        <li>Navigate to <strong>Topics</strong> via the navbar to select a quiz or competition topic.</li>
        <li>Complete quizzes to earn points and increase your coin balance.</li>
        <li>Your scores are displayed at the end of each quiz, and leaderboard rankings are updated weekly.</li>
        <li>Claim rewards for top leaderboard positions through the in-game chat system.</li>
      </ol>
    </section>

    <!-- Contact Information -->
    <section>
      <h2>Contact</h2>
      <p>
        For inquiries, feedback, or reward-related questions, contact the developer:  
        <strong>Ebuka Jullian</strong> — <a href="mailto:ebukaolisaemeka@yahoo.com">ebukaolisaemeka@yahoo.com</a>
      </p>
    </section>

    <!-- Disclaimer -->
    <section>
      <h2>Disclaimer</h2>
      <p>
        Howell is an educational and entertainment quiz game. Rewards are only offered to verified leaderboard winners.
        Playing Howell does not involve gambling. By using the app, you acknowledge and agree to all competition rules
        and privacy policies.
      </p>
    </section>
  </div>
</template>

<script setup>
// No dynamic logic needed; static informational page
</script>

<style scoped>
.policies-page {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(0,0,0,0.1);
  color: #222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #0077cc;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

h2 {
  color: #005fa3;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

ul, ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.8rem;
}
a {
  color: #0077cc;
  text-decoration: underline;
}
a:hover {
  color: #005fa3;
}
</style>
