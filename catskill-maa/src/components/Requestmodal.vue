<script setup lang="ts">
import { reactive, ref} from 'vue';

const showModal = ref(false);

const form = ref({
  name: '',
  email: '',
  number: '',
  message: '',
  program: ''
});

function closeModal() {
  showModal.value = false;
}

const loading = ref(false);

async function handleSubmit() {
  loading.value = true; 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxC54AkkAhCcaBe1XN4KFAZpD3aEMQbmR03wMVF94mIRb2ExyPpOW_qx1VZBwVsrcYriQ/exec';
  const formData = new FormData();

  formData.append('Name', form.value.name);
  formData.append('Email', form.value.email);
  formData.append('Number', form.value.number);
  formData.append('Message', form.value.message);
  formData.append('Program', form.value.program);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      form.value = { name: '', email: '', number: '', message: '', program: '' };
      closeModal();
    } else {
      alert('There was a problem submitting the form.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the form.');
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <!-- Trigger Button -->
    <button class="button" @click="showModal = true">Request Information</button>

    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Request Information</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>

        <section class="modal-card-body">
          <!-- Form -->
          <form @submit.prevent="handleSubmit">
            <div class="columns is-multiline">
              <div class="column is-half">
                <div class="field">
                  <label class="label">Full Name</label>
                  <div class="control has-icons-left">
                    <input
                      class="input is-small"
                      type="text"
                      v-model="form.name"
                      required
                      :disabled="loading"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      class="input is-small"
                      type="email"
                      v-model="form.email"
                      required
                      :disabled="loading"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">Phone Number</label>
                  <div class="control has-icons-left">
                    <input
                      class="input is-small"
                      type="tel"
                      v-model="form.number"
                      required
                      :disabled="loading"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-phone"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">Program</label>
                  <div class="control has-icons-left">
                    <div class="select is-small is-fullwidth">
                      <select v-model="form.program" required :disabled="loading">
                        <option disabled value="">Select a program</option>
                        <option value="little-dragons">Little Dragons (Ages 4–7)</option>
                        <option value="youth">Youth (Ages 7–10)</option>
                        <option value="teen-adult">Teen/Adult Program (Ages 13+)</option>
                      </select>
                    </div>
                    <span class="icon is-small is-left">
                      <i class="fas fa-chalkboard-teacher"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="column is-full">
                <div class="field">
                  <label class="label">Questions/Concerns</label>
                  <div class="control">
                    <textarea
                      class="textarea is-small"
                      v-model="form.message"
                      placeholder="Additional details"
                      :disabled="loading"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="column is-full">
                <div class="field is-grouped">
                  <div class="control">
                    <button
                      class="button is-link is-small"
                      type="submit"
                      :disabled="loading"
                    >
                      <span v-if="loading" class="icon">
                        <i class="fas fa-spinner fa-spin"></i>
                      </span>
                      <span v-else>Submit</span>
                    </button>
                  </div>
                  <div class="control">
                    <button
                      class="button is-light is-small"
                      @click="closeModal"
                      type="button"
                      :disabled="loading"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>



<style scoped>
.modal-card {
  width: 90%;
  max-width: 700px;
}
.button {
  height: 40px;
  width: 200px;
  position: relative;
  z-index: 10;
}
</style>