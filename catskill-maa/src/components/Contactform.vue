
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        number: '',
        message: '',
        program: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw5cxSl3jyd33_LoCdr6bvWVj6xDW1y2iPmN7_Evf5RTlB8rwkGgNe88LjwKXRkhoZwcQ/exec';
      const formData = new FormData();

      formData.append('Name', this.form.name);
      formData.append('Email', this.form.email);
      formData.append('Number', this.form.number);
      formData.append('Message', this.form.message);
      formData.append('Program', this.form.program);

      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          alert('Form submitted successfully!');
          // Reset form fields
          this.form.name = '';
          this.form.email = '';
          this.form.number = '';
          this.form.message = '';
          this.form.program = '';
        } else {
          alert('There was a problem submitting the form.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
      }
    }
  }
};
</script>

<template>
    <div class="container">
       
    <form @submit.prevent="handleSubmit">
<div class="columns is-multiline">
        <div class="column is-half">
          <div class="field">
            <label class="label">Full Name</label>
            <div class="control has-icons-left">
              <input class="input is-small" type="text" v-model="form.name" placeholder="Full Name" required>
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
              <input class="input is-small" type="email" v-model="form.email" placeholder="Your email" required>
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
              <input class="input is-small" type="tel" v-model="form.number" placeholder="Phone Number" required>
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
    <div class="column is-full">
          <div class="field">
            <label class="label">Questions/Concerns</label>
            <div class="control">
              <textarea class="textarea is-small" v-model="form.message" placeholder="Additional details"></textarea>
            </div>
          </div>
        </div>


    <div class="column is-full">
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link is-small" type="submit">Schedule your FREE Trial Class</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.title {
    text-align: center;
}
.subtitle {
    text-align: center;
    
}
.container {
  margin-top: 110px;
  padding-bottom: 50px;
}
</style>