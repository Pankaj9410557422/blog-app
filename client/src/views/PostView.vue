<template>
    <div class="text-center" >
      <div class="col-sm-12" id="posts-container">
      <!-- <h4 style="margin-top: 30px;"><small><button class="btn btn-success" v-on:click="navigate()"> View All Posts </button></small></h4> -->
      <hr>
      <div v-for="post in posts" :key="post.id">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <h6 class="card-subtitle mb-2 text-muted"><span class="glyphicon glyphicon-time"></span> Author: {{ post.username}} | Posted on:{{ post.date_posted }}</h6>
            <p class="card-text">{{ post.body }}</p>
        </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost:function() {
      axios
        .get(`${process.env.VUE_APP_baseURL}/api/posts/`)
        .then((data) => {
            console.log(data.data)
            this.posts = data.data
            // console.log(this.post)
        })
        .catch((error)=>{
            console.log(error)
        });
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>
<style scoped>
#posts-container{
    display:flex;
    justify-content: space-evenly;
    margin-top:10px
}
</style>