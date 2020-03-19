<template>
  <div class="container">
    <div class="form">
      <h4>Email Subject</h4>
      <input type="text" v-model="emailSubject" />
      <h4>Recipients emails:</h4>
      <textarea rows="7" cols="50" v-model="recipients"></textarea>
      <div id="img-cont">
        <h4>Image to send:</h4>
        <label>Width:</label>
        <input type="number" v-model="width" />
        <div id="c-img">
          <img :src="imgUrl" alt="No Img available" />
        </div>
      </div>
      <h4>Email Message</h4>
      <textarea rows="7" cols="50" v-model="emessage"></textarea>
      <button @click="sendEmail">Send Email</button>
    </div>

    <div v-for="(image, index) in images" :key="index" class="thumbnail">
      <img
        :src="`${image.name}~${width}.${image.ext}`"
        :width="width"
        @load="imageLoaded"
        @click="imgSelected"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LoadCheck } from "../mixins/loadCheck";
import axios from "axios";

export default {
  name: "After",

  mixins: [LoadCheck],

  data() {
    return {
      width: 200,
      emailSubject: "",
      recipients: "",
      imgUrl: "https://ucarecdn.com/2c4f81e4-d18c-4aec-aa63-3994c554f1ea/",
      emessage: ""
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
    sendEmail() {
      let serverUrl = "https://image-streamer.herokuapp.com/send";
      let arr1 = this.imgUrl.split(".");
      arr1[arr1.length - 2] += "~email";
      let fullImgUrl = arr1.join(".");

      let htmlBod = `<html>
<h1>ImgeStreamer 2.1</h1>
<h3>CHG HackDay Project</h3>
<p><strong>Message: </strong>${this.emessage}</p>
<img src="${fullImgUrl}" alt="HackDay Picture"/>
<p>By: Joseph VanWagoner & Edmundo Rubio</p>
</html>`;

      let postBody = {
        emailRecipients: this.recipients,
        emailSubject: this.emailSubject,
        emailBody: htmlBod
      };

      console.log("HTML send to:");
      console.log(htmlBod);

      axios.post(serverUrl, postBody).then(resp => {
        console.log("\n ==> Server response: ", resp);
      });
    }
  }
};
</script>

<style lang="scss">
.container {
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 25%;
  display: flex;

  .form {
    width: 100%;
    margin-bottom: 2rem;

    input {
      padding: 0.5rem;
      margin-left: 0.5rem;
    }
  }

  .thumbnail {
    flex: 1 1 auto;
  }

  #img-cont {
    display: flex;
    flex-direction: column;
  }

  #c-img {
    margin-top: 10px;
  }
}
</style>
