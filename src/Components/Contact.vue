<template>
    <div class="main">
      <h1>Contact</h1>
  
      <div class="wrapper">
        <p>Nom</p>
        <input type="text" v-model="nom" :disabled="!nomFilled" required> <span class="red" v-if="nom =='' ">*</span>
        <p>Email</p>
        <input type="text" v-model="email" :disabled="!emailFilled" required> <span class="red" v-if="email =='' ">*</span>
        <p>Message</p>
        <input type="text" v-model="message" :disabled="!messageFilled" required> <span class="red" v-if="message =='' ">*</span>
  
        <button v-if="nom && email && message" @click="send">Send</button>
  
        <p class="succ" v-if="succ">Send success</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        nom: "",
        email: "",
        message: "",
        succ: "",
        nomFilled: true,
        emailFilled: false,
        messageFilled: false,
      };
    },
    computed: {
      canSend() {
        return this.nomFilled && this.emailFilled && this.messageFilled;
      },
    },
    methods: {
      send() {
        console.log(this.nom, this.email, this.message);
        this.succ = "200ok";
      },
    },
    watch: {
     
      nom(value) {
        this.emailFilled = true;
      },
      email(value) {
        this.messageFilled = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  
  .succ {
    color: green;
  }
  .red{
    color: red;
  }
  </style>
  
