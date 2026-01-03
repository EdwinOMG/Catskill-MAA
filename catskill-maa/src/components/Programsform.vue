<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Contact Us!'
  }
});

const form = reactive({
  name: '',
  email: '',
  number: '',
  message: '',
  program: ''
});

const handleSubmit = async () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxC54AkkAhCcaBe1XN4KFAZpD3aEMQbmR03wMVF94mIRb2ExyPpOW_qx1VZBwVsrcYriQ/exec';
  const formData = new FormData();

  formData.append('Name', form.name);
  formData.append('Email', form.email);
  formData.append('Number', form.number);
  formData.append('Message', form.message);
  formData.append('Program', form.program);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      form.name = '';
      form.email = '';
      form.number = '';
      form.message = '';
      form.program = '';
    } else {
      alert('There was a problem submitting the form.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the form.');
  }
};
</script>

<template>
<div class="box">
  <div class="container">
    <div class="title mainTitle is-2">{{ props.title }}</div>

    <form @submit.prevent="handleSubmit">
      <div class="form columns is-multiline">
        <div class="column is-half">
          <div class="field">
            <label class="label">Full Name</label>
            <div class="control has-icons-left">
              <input class="input is-small" type="text" v-model="form.name" placeholder="Full Name" required />
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
              <input class="input is-small" type="email" v-model="form.email" placeholder="Your email" required />
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
              <input class="input is-small" type="tel" v-model="form.number" placeholder="Phone Number" required />
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
                <select v-model="form.program" required>
                  <option value="" disabled>Select a program</option>
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

        <div class="column is-full has-text-centered">
  <div class="field">
    <div class="control">
      <button class="button is-link is-small" type="submit">
        Schedule your FREE Trial Class
      </button>
    </div>
  </div>
</div>
      </div>
    </form>
  </div>
</div>
</template>

<style scoped>
.box {
    background-color: lightblue
}
.container {
    margin-top: 120px!important;
    
}
.form {
  padding-top: 0px;
}
.mainTitle {
  padding-bottom: 0px !important;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  color: black;
}

.title {
  padding-bottom: 25px;
}
.container {
  margin-top: 0px;
  padding-bottom: 30px;
  padding-top: 50px;
}

.button {
  background-color: #4a90e2;
  color: white;
  padding: 10px 20px;
  
}
</style>