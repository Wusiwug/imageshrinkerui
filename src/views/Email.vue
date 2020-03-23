<template>
  <div class="main-container">
    <v-card class="mx-auto mb-4" max-width="500" color="blue lighten-4" outlined>
      <v-card-title>Email Details</v-card-title>
      <div class="pa-3">
        <v-text-field
          label="Email subject"
          v-model="emailSubject"
          hide-details="auto"
          background-color="light-blue lighten-5"
        ></v-text-field>
        <v-textarea
          outlined
          v-model="recipients"
          color="black"
          name="input-7-4"
          class="mt-5"
          label="Recipients Emails"
          background-color="yellow lighten-5"
        ></v-textarea>

        <v-text-field
          label="Image Width"
          v-model="width"
          hide-details="auto"
          background-color="light-blue lighten-5"
        ></v-text-field>

        <div class="ma-3">
          <img :src="imgUrl" alt="No Img available" />
        </div>
        <v-textarea
          outlined
          v-model="emessage"
          color="black"
          name="input-7-4"
          label="Email Message"
          background-color="yellow lighten-5"
        ></v-textarea>

        <v-btn color="success" @click="exeEmail">Send Email</v-btn>
      </div>
    </v-card>
    <div class="img-container">
      <div v-for="(image, index) in images" :key="index" class="thumbnail">
        <img
          :src="`${image.name}~${width}.${image.ext}`"
          :width="width"
          @load="imageLoaded"
          @click="imgSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LoadCheck } from "../mixins/loadCheck";
import { sendEmail } from "../utilities/email";

export default {
  name: "After",

  mixins: [LoadCheck],

  data() {
    return {
      width: 200,
      emailSubject: "",
      recipients: "",
      imgUrl: "https://ucarecdn.com/2c4f81e4-d18c-4aec-aa63-3994c554f1ea/",
      emessage: "",
      rules: [value => (value && value.length >= 3) || "Min 3 characters"]
    };
  },

  computed: {
    ...mapGetters(["images"])
  },

  mounted() {
    this.getAfterImages();
  },

  methods: {
    ...mapActions(["getAfterImages"]),
    imgSelected(eve) {
      this.imgUrl = eve.target.src;
    },
    exeEmail() {
      let dataForEmail = {
        imgUrl: this.imgUrl,
        recipients: this.recipients,
        emailSubject: this.emailSubject,
        message: this.emessage
      };
      sendEmail(dataForEmail);
      this.imgUrl =
        "https://ucarecdn.com/2c4f81e4-d18c-4aec-aa63-3994c554f1ea/";
      this.recipients = "";
      this.emailSubject = "";
      this.emessage = "";
    }
  }
};
</script>

<style lang="scss">
.thumbnail {
  flex: 1 1 auto;
}

.img-container {
  border: 1px slid black;
  background-color: rgb(223, 205, 255);
  display: flex;
  flex-wrap: wrap;
  max-width: 60vw;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
}
</style>
