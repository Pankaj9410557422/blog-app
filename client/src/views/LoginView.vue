/* eslint-disable */
<template>
  <div class="container"> 
    <br>
    <br>
    <h1>Login to Blogger</h1>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="mb-3">
                <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" autocomplete="off" required>
            </div>
            
            <button @click="login" class="btn btn-primary">Login</button>
    </div>
        <div class="col-md-3"></div>
    </div>
  
    </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
// import {router} from "../router/index"
console.log(`${process.env.VUE_APP_baseURL}/api/auth/login`);

export default {
    data() {
        return {
            email:"",
            password:""
        }
    },
    methods:{
        login:function(){
            let loginData={
             "email": this.email,
            "password":this.password
            }
            if(loginData.email.length > 1 && loginData.password.length >1){
            this.__submitToServer(loginData);
            }else{
                console.log("Input malformed")
            }
        },
        __submitToServer(data){
            axios.post(`${process.env.VUE_APP_baseURL}/api/auth/login`,data).then(data=>{
                console.log(data);
                localStorage.setItem("id",data.data["_id"])
                localStorage.setItem("isAuthenticated",true)
                localStorage.setItem("username",data.data["username"])
                router.push({name:"posts"})
            })
        }
    }
}
</script>

<style>

</style>