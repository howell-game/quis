<template>
  <div class="leaderboard">
    <h2>Leaderboard</h2>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Questions</th>
          <th>Correct</th>
          <th>Time (s)</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(player, index) in top10"
          :key="player.id"
          :class="{ highlight: player.id === currentUserId }"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.question }}</td>
          <td>{{ player.correct }}</td>
          <td>{{ player.timeSpent }}</td>
          <td>{{ player.score }}</td>
        </tr>

        <!-- Pinned Row if not in top 10 -->
        <tr
          v-if="pinnedPlayer"
          class="highlight pinned"
        >
          <td>{{ pinnedPlayer.rank }}</td>
          <td>{{ pinnedPlayer.name }} (You)</td>
          <td>{{ pinnedPlayer.question }}</td>
          <td>{{ pinnedPlayer.correct }}</td>
          <td>{{ pinnedPlayer.timeSpent }}</td>
          <td>{{ pinnedPlayer.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onSnapshot, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase"; // adjust path

export default {
  name: "Leaderboard",
  data() {
    return {
      players: [],
      currentUserId: null,
    };
  },
  computed: {
    sortedPlayers() {
      return [...this.players].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.correct !== a.correct) return b.correct - a.correct;
        return a.timeSpent - b.timeSpent;
      });
    },
    top10() {
      return this.sortedPlayers.slice(0, 10);
    },
    pinnedPlayer() {
      const index = this.sortedPlayers.findIndex(
        (p) => p.id === this.currentUserId
      );
      if (index >= 10 && index !== -1) {
        return { ...this.sortedPlayers[index], rank: index + 1 };
      }
      return null;
    },
  },
  mounted() {
    this.currentUserId = "YOUR_USER_ID"; // replace dynamically after auth

    const usersRef = collection(db, "users");

    onSnapshot(usersRef, async (snapshot) => {
      const allPlayers = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          name: data.name || "Anonymous",
          question: data.question || 0,
          correct: data.correct || 0,
          timeSpent: data.timeSpent || 0,
          score:
            (data.correct || 0) * 10 - (data.timeSpent || 0) / 10,
        };
      });

      // Sort players and assign ranks
      const sorted = [...allPlayers].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.correct !== a.correct) return b.correct - a.correct;
        return a.timeSpent - b.timeSpent;
      });

      // Save ranks to Firestore
      sorted.forEach(async (player, index) => {
        const playerRef = doc(db, "users", player.id);
        await updateDoc(playerRef, {
          rank: index + 1, // rank starts at 1
        });
      });

      this.players = allPlayers;
    });
  },
};
</script>



<style scoped>
.leaderboard {
  max-width: 100%;
  margin: auto;
  overflow-x: auto; /* Enables horizontal scroll if needed */
}

table {
  width: 100%;
  min-width: 500px; /* Prevents the table from shrinking too much */
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #966f6fff;
  white-space: nowrap; /* Prevents text from breaking into multiple lines */
}

.highlight {
  background-color: #ffeb99;
  font-weight: bold;
}

.pinned {
  border-top: 2px solid #000;
}

/* On very small devices, make the text a bit smaller */
@media (max-width: 600px) {
  th, td {
    padding: 6px;
    font-size: 12px;
  }
}
</style>