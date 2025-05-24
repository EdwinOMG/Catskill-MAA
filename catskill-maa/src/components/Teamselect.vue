<script setup lang="ts">
import { ref } from 'vue';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Lead Instructor',
    description: 'Expert in traditional Tang Soo Do with over 15 years of experience.',
    image: '/images/alice.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Assistant Instructor',
    description: 'Specializes in sparring techniques and student mentorship.',
    image: '/images/bob.jpg',
  },
  {
    id: 3,
    name: 'Carol Lee',
    role: 'Program Coordinator',
    description: 'Oversees curriculum development and event planning.',
    image: '/images/carol.jpg',
  },
];

const selectedMember = ref<TeamMember | null>(null);

function selectMember(member: TeamMember) {
  selectedMember.value = member;
}
</script>

<template>
  <div class="team-section">
    <TransitionGroup name="fade" tag="div" class="profile-circles">
      <div
        v-for="member in teamMembers"
        :key="member.id"
        class="profile-circle"
        :style="{ backgroundImage: `url(${member.image})` }"
        @click="selectMember(member)"
      ></div>
    </TransitionGroup>

    <Transition name="fade">
      <div v-if="selectedMember" class="member-details">
        <img :src="selectedMember.image" alt="Profile Picture" />
        <h2>{{ selectedMember.name }}</h2>
        <h4>{{ selectedMember.role }}</h4>
        <p>{{ selectedMember.description }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.team-section {
  text-align: center;
  padding: 2rem;
}

.profile-circles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.profile-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 0 4px white, 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

/* Rainbow arrangement using nth-child */
.profile-circle:nth-child(1) {
  transform: translateY(0);
}
.profile-circle:nth-child(2) {
  transform: translateY(-20px);
}
.profile-circle:nth-child(3) {
  transform: translateY(0);
}

.member-details {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

.member-details img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

/* Fade transition classes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Keyframes for fadeIn animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.team-section {
    margin-top: 90px;
    padding-top:50px;
}


</style>