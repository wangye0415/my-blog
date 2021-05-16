<template>
  <Layout>
    <header
      class="masthead"
      style="background-image: url('/img/contact-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have questions? I have answers.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>
            Want to get in touch? Fill out the form below to send me a message
            and I will get back to you as soon as possible!
          </p>
          <form id="contactForm" name="sentMessage" novalidate>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                  v-model="form.name"
                  required
                  data-validation-required-message="Please enter your name."
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  v-model="form.email"
                  required
                  data-validation-required-message="Please enter your email address."
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div
                class="form-group col-xs-12 floating-label-form-group controls"
              >
                <label>Phone Number</label>
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  v-model="form.phone"
                  required
                  data-validation-required-message="Please enter your phone number."
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Message"
                  required
                  v-model="form.message"
                  data-validation-required-message="Please enter a message."
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div id="success"></div>
            <button
              class="btn btn-primary"
              id="sendMessageButton"
              type="submit"
              @click.prevent="onSubmit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "contact",
  },
  name: "contactPage",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await axios({
          method: "POST",
          url: "http://localhost:1337/contacts",
          data: this.form,
        });
        window.alert("发送成功");
      } catch (error) {
        window.alert("发送失败，请稍后重试");
      }
    },
  },
};
</script>
