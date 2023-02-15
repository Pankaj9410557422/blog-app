<template>
    <div class="create-post">
         <div class="col-md-12 form-wrapper">
           <h2> Create Post </h2>
           <form id="create-post-form" @submit.prevent="createPost">
                <div class="form-group col-md-12">
                 <label for="title"> Title </label>
                 <input type="text" id="title" v-model="title" name="title" class="form-control" placeholder="Enter title">
                </div>
               <div class="form-group col-md-12">
                   <label for="description"> Description </label>
                   <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
               </div>
               <div class="form-group col-md-12">
                   <label for="body"> Write Content </label>
                   <textarea id="body" cols="30" rows="5" v-model="body" class="form-control"></textarea>
               </div>
               <div class="form-group col-md-12">
                   <label for="author"> Author </label>
                   <input type="text" id="author" v-model="username" name="author" class="form-control">
               </div>
               <div class="form-group col-md-4 pull-right subbutton">
                   <button class="btn btn-primary" type="submit"> Create Post </button>
               </div>          
           </form>
         </div>
     </div>
 </template>
 
 <script>
 import axios from "axios";
 import router from "../router";
 export default {
   data() {
     return {
       title: "",
       description: "",
       body: "",
       username: "",
       date_posted: ""
     };
   },
   created() {
     this.date_posted = new Date().toLocaleDateString();
   },
   methods: {
     createPost() {
       let postData = {
         title: this.title,
         description: this.description,
         body: this.body,
         username: this.username,
         date_posted: this.date_posted
       };
       console.log(postData)
       this.__submitToServer(postData);
     },
     __submitToServer(data) {
       axios.post(`${process.env.VUE_APP_baseURL}/api/posts/${localStorage.getItem("id")}`, data).then(data => {
         console.log(typeof(data));
         router.push({ name: "home" });
       });
     }
   }
 };
 </script>
 <style scoped>
 .create-post{
    border:1px solid;
    width:50%;
    height:60%;
    padding:10px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:6px;
    box-shadow: 10px 10px 5px lightblue;
 }
 .subbutton{
    margin-top:9px;
    width:100%
 }
 </style>