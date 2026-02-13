<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'tournament' | 'testing' | 'community' | 'special';
}

const events = ref<Event[]>([
  {
    id: 1,
    title: 'Teen Night Out',
    date: '2026-02-20',
    time: '6:00 PM - 11:00 PM',
    location: 'Catskill Martial Arts Academy',
    description: 'An exciting evening for teens with games, activities, and fun. Drop off your teens for a great night!',
    image: '/events/teennightout.jpg',
    category: 'special',
  },
  {
    id: 2,
    title: 'St. Patrick\'s Day Parade',
    date: '2026-03-14',
    time: 'TBA',
    location: 'Jeffersonville, NY',
    description: 'Join us as we march in the St. Patrick\'s Day Parade! Show your CMAA pride in the community.',
    image: '/events/parade.jpg',
    category: 'community',
  },
  {
    id: 3,
    title: '2026 Trinity Invitational',
    date: '2026-03-28',
    time: 'TBA',
    location: 'Fishkill Recreation Center',
    description: 'Compete in forms, sparring, and weapons at this exciting tournament. All ranks welcome!',
    image: '/events/trinitytourn.jpg',
    category: 'tournament',
  },
  {
    id: 4,
    title: 'Hudson Valley Invitational',
    date: '2026-03-29',
    time: 'TBA',
    location: 'Roy C Ketcham High School',
    description: 'Regional tournament featuring forms, sparring, and weapons divisions for all ages and skill levels.',
    image: '/events/valleytourn.jpg',
    category: 'tournament',
  },
  {
    id: 5,
    title: 'Southern Tier NY Martial Arts Invitational',
    date: '2026-05-16',
    time: 'TBA',
    location: 'Endicott, NY',
    description: 'Major regional tournament with competitors from across New York. All disciplines welcome!',
    image: '/events/southerntourn.jpg',
    category: 'tournament',
  },
  {
    id: 6,
    title: 'Fairbanks Karate Tournament',
    date: '2026-06-13',
    time: 'TBA',
    location: 'Endicott, NY',
    description: 'Annual Fairbanks tournament featuring traditional karate competition. Great opportunity for all students!',
    image: '/events/fairbankstourn.jpg',
    category: 'tournament',
  },
]);

// Carousel controls
const carouselRef = ref<HTMLElement | null>(null);
const isPaused = ref(false);
const isManuallyScrolling = ref(false);
let animationFrameId: number | null = null;
let scrollPosition = 0;
let lastScrollLeft = 0;
let scrollTimeout: number | null = null;
const scrollSpeed = 0.3; // Reduced speed for easier interaction

// Filter state - now includes 'expired'
const selectedCategory = ref<Event['category'] | 'all' | 'expired'>('all');

const categories = [
  { value: 'all', label: 'All Events', icon: 'fa-calendar-alt' },
  { value: 'tournament', label: 'Tournaments', icon: 'fa-trophy' },
  { value: 'testing', label: 'Belt Testing', icon: 'fa-award' },
  { value: 'community', label: 'Community', icon: 'fa-users' },
  { value: 'special', label: 'Special Events', icon: 'fa-star' },
  { value: 'expired', label: 'Past Events', icon: 'fa-history' },
] as const;

const getCategoryColor = (category: Event['category']) => {
  const colors = {
    tournament: 'is-danger',
    testing: 'is-info',
    community: 'is-success',
    special: 'is-warning',
  };
  return colors[category];
};

const getCategoryLabel = (category: Event['category']) => {
  const labels = {
    tournament: 'Tournament',
    testing: 'Belt Testing',
    community: 'Community',
    special: 'Special Event',
  };
  return labels[category];
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });
};

const getMonthDay = (dateString: string) => {
  const date = new Date(dateString);
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate(),
  };
};

// Helper function to check if an event is expired
const isEventExpired = (dateString: string) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  
  // Set both dates to midnight for accurate comparison
  eventDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  // Event is expired if it's before today (the day after the event)
  return eventDate < today;
};

const upcomingEvents = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  let filtered = events.value;
  
  // Filter based on expired vs upcoming
  if (selectedCategory.value === 'expired') {
    // Show only expired events, sorted by most recent first
    filtered = filtered
      .filter(event => isEventExpired(event.date))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else {
    // Show only upcoming events (not expired)
    filtered = filtered
      .filter(event => !isEventExpired(event.date))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    // Apply category filter for upcoming events
    if (selectedCategory.value !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory.value);
    }
  }
  
  return filtered;
});

const noUpcomingEvents = computed(() => upcomingEvents.value.length === 0);

// Just show the actual events without duplication
const displayedEvents = computed(() => {
  return upcomingEvents.value;
});

const filterCategory = (category: Event['category'] | 'all' | 'expired') => {
  selectedCategory.value = category;
  // Reset scroll position when filtering
  if (carouselRef.value) {
    scrollPosition = 0;
    carouselRef.value.scrollLeft = 0;
  }
};

// Auto-scroll animation
const animate = () => {
  if (!carouselRef.value || isPaused.value || isManuallyScrolling.value) {
    animationFrameId = requestAnimationFrame(animate);
    return;
  }

  scrollPosition += scrollSpeed;
  
  // Stop scrolling when we reach the end
  const maxScroll = carouselRef.value.scrollWidth - carouselRef.value.clientWidth;
  if (scrollPosition >= maxScroll) {
    scrollPosition = maxScroll;
  }
  
  carouselRef.value.scrollLeft = scrollPosition;
  animationFrameId = requestAnimationFrame(animate);
};

const handleScroll = () => {
  if (!carouselRef.value) return;
  
  // Detect manual scrolling
  const currentScrollLeft = carouselRef.value.scrollLeft;
  if (Math.abs(currentScrollLeft - scrollPosition) > 2) {
    isManuallyScrolling.value = true;
    scrollPosition = currentScrollLeft;
    
    // Clear existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Resume auto-scroll after user stops scrolling for 4 seconds
    scrollTimeout = setTimeout(() => {
      isManuallyScrolling.value = false;
    }, 4000) as unknown as number;
  }
  
  lastScrollLeft = currentScrollLeft;
};

const handleMouseEnter = () => {
  isPaused.value = true;
};

const handleMouseLeave = () => {
  isPaused.value = false;
};

onMounted(() => {
  if (!noUpcomingEvents.value && carouselRef.value) {
    animationFrameId = requestAnimationFrame(animate);
    carouselRef.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<template>
  <section class="events-section">
    <div class="container">
      <div class="section-header">
        <h2 class="title is-2 has-text-centered">Upcoming Events</h2>
        <p class="subtitle is-5 has-text-centered has-text-grey">
          Join us for training, tournaments, and community activities
        </p>
        
        <!-- Category Filters -->
        <div class="filter-tabs">
          <button
            v-for="category in categories"
            :key="category.value"
            class="filter-tab"
            :class="{ 'is-active': selectedCategory === category.value }"
            @click="filterCategory(category.value)"
          >
            <span class="icon">
              <i class="fas" :class="category.icon"></i>
            </span>
            <span>{{ category.label }}</span>
          </button>
        </div>
      </div>

      <!-- No events message -->
      <div v-if="noUpcomingEvents" class="no-events-card">
        <div class="has-text-centered">
          <span class="icon is-large has-text-grey-light">
            <i class="fas fa-calendar-times fa-3x"></i>
          </span>
          <p class="title is-3 mt-4">No {{ selectedCategory === 'expired' ? 'Past' : 'Upcoming' }} Events</p>
          <p class="subtitle is-5 mt-1 has-text-grey">
            {{ selectedCategory === 'all' 
              ? 'Check back soon for new events and activities!' 
              : selectedCategory === 'expired'
              ? 'No past events to display yet.'
              : 'No events in this category. Try selecting a different filter.' 
            }}
          </p>
        </div>
      </div>

      <!-- Carousel wrapper -->
      <div v-else class="carousel-wrapper">
        <div 
          ref="carouselRef"
          class="events-carousel"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <article 
            v-for="event in displayedEvents" 
            :key="event.id" 
            class="event-card"
            :class="{ 'is-expired': selectedCategory === 'expired' }"
          >
            <!-- Date badge -->
            <div class="date-badge" :class="{ 'is-expired': selectedCategory === 'expired' }">
              <div class="date-month">{{ getMonthDay(event.date).month }}</div>
              <div class="date-day">{{ getMonthDay(event.date).day }}</div>
            </div>

            <!-- Event image -->
            <figure class="event-image">
              <img :src="event.image" :alt="event.title" />
              <span class="tag category-tag" :class="getCategoryColor(event.category)">
                {{ getCategoryLabel(event.category) }}
              </span>
              <!-- Expired badge overlay -->
              <span v-if="selectedCategory === 'expired'" class="tag expired-tag">
                Past Event
              </span>
            </figure>

            <!-- Event content -->
            <div class="event-content">
              <h3 class="event-title">{{ event.title }}</h3>
              
              <div class="event-details">
                <div class="detail-item">
                  <span class="icon has-text-info">
                    <i class="fas fa-calendar"></i>
                  </span>
                  <span>{{ formatDate(event.date) }}</span>
                </div>
                
                <div class="detail-item">
                  <span class="icon has-text-info">
                    <i class="fas fa-clock"></i>
                  </span>
                  <span>{{ event.time }}</span>
                </div>
                
                <div class="detail-item">
                  <span class="icon has-text-info">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span>{{ event.location }}</span>
                </div>
              </div>

              <p class="event-description">{{ event.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===========================
   SECTION
=========================== */
.events-section {
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 60vh;
  overflow: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  margin-top: 6.5rem;
  margin-bottom: 2rem;
}

.section-header .title {
  color: #00008b;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

/* ===========================
   FILTER TABS
=========================== */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.filter-tab {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.filter-tab:hover {
  border-color: #00008b;
  color: #00008b;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 139, 0.15);
}

.filter-tab.is-active {
  background: linear-gradient(135deg, #00008b 0%, #0000cc 100%);
  border-color: #00008b;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 139, 0.3);
}

.filter-tab .icon {
  font-size: 0.9rem;
}

@media screen and (max-width: 768px) {
  .filter-tabs {
    gap: 0.5rem;
  }
  
  .filter-tab {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}

/* ===========================
   NO EVENTS CARD
=========================== */
.no-events-card {
  background: white;
  border-radius: 12px;
  padding: 4rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}



/* ===========================
   CAROUSEL WRAPPER
=========================== */
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* ===========================
   EVENTS CAROUSEL
=========================== */
.events-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
  scroll-behavior: smooth;
  cursor: grab;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 139, 0.3) rgba(0, 0, 0, 0.05);
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  scroll-snap-type: x proximity; /* Subtle snap for better UX */
}

.events-carousel:active {
  cursor: grabbing;
}

/* Styled scrollbar for Chrome, Safari and Opera */
.events-carousel::-webkit-scrollbar {
  height: 10px;
}

.events-carousel::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0 20px;
}

.events-carousel::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 139, 0.3);
  border-radius: 10px;
  transition: background 0.2s ease;
}

.events-carousel::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 139, 0.5);
}

@media screen and (max-width: 768px) {
  .events-carousel {
    gap: 1.5rem;
    scrollbar-width: none; /* Hide scrollbar on mobile */
  }
  
  .events-carousel::-webkit-scrollbar {
    display: none;
  }
}

/* ===========================
   EVENT CARD
=========================== */
.event-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0s;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 350px;
  flex-shrink: 0;
  z-index: 1;
  scroll-snap-align: start;
}

/* Expired event styling */
.event-card.is-expired {
  opacity: 0.85;
  filter: grayscale(20%);
}

.event-card.is-expired:hover {
  opacity: 1;
  filter: grayscale(0%);
}

@media screen and (max-width: 768px) {
  .event-card {
    min-width: 300px;
    max-width: 300px;
  }
}

@media screen and (max-width: 480px) {
  .event-card {
    min-width: 280px;
    max-width: 280px;
  }
}

.event-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 16px 32px rgba(0, 0, 139, 0.2);
  z-index: 10;
}

/* ===========================
   DATE BADGE
=========================== */
.date-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  z-index: 10;
  min-width: 60px;
}

.date-badge.is-expired {
  background: #f0f0f0;
}

.date-badge.is-expired .date-month {
  color: #666;
}

.date-badge.is-expired .date-day {
  color: #888;
}

.date-month {
  font-size: 0.75rem;
  font-weight: 700;
  color: #00008b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.date-day {
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  line-height: 1;
}

/* ===========================
   EVENT IMAGE
=========================== */
.event-image {
  position: relative;
  height: 200px;
  margin: 0;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 0.3s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.08);
}

.category-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.expired-tag {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* ===========================
   EVENT CONTENT
=========================== */
.event-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #00008b;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.event-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.detail-item .icon {
  font-size: 0.85rem;
}

.event-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

/* ===========================
   RESPONSIVE
=========================== */
@media screen and (max-width: 768px) {
  .events-section {
    padding: 2rem 1rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .event-image {
    height: 180px;
  }

  .event-title {
    font-size: 1.1rem;
  }

  .date-badge {
    min-width: 50px;
    padding: 0.4rem;
  }

  .date-day {
    font-size: 1.5rem;
  }
}
</style>