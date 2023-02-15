<template>
    <div class="container"> 
    <br>
    <br>
    <h1>Register to Blogger</h1>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="mb-3">
                <input type="text" v-model="username" class="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Full Name" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <input type="password" v-model="reenterpassword" class="form-control" id="reenterpassword" placeholder="Re-Enter Password" autocomplete="off" required>
            </div>
            <div v-if="password != reenterpassword">Passwords don't match</div>
            <button @click="register" class="btn btn-primary">Register</button>
        </div>
        <div class="col-md-3"></div>
    </div>
  
    </div>
</template>

<script>
import router from "@/router";
import axios from "axios"
export default {
    data() {
        return {
            username:"",
            email:"",
            password:"",
            reenterpassword:""
        }
    },
    methods:{
        register:function(){
            let registerData ={
                username:this.username,
                email:this.email,
                password:this.password
            }
            if(registerData.email.length > 1 && registerData.password.length >1){
                this.__submitToServer(registerData);
            }else{
                console.log("Input malformed")
            }
        },
        __submitToServer(data){
            axios.post(`${process.env.VUE_APP_baseURL}/api/auth/register`,data).then((data)=>{
                localStorage.setItem("id",data.data._id)
                localStorage.setItem("isAuthenticated",true)
                localStorage.setItem("username",data.data.username)
                router.push({name:"posts"})

            })
        }
    }
}
</script>

<style scoped>

</style>