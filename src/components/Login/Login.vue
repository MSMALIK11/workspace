<template>
    <div class="login-container">

    <div class="login">

    <div class="logo">
    <img src="../../assets/images/download.png" alt="">
    </div>
    <span class="heading text-3xl text-center bg-green-200">Sign in to continue to RBAC</span>
    <input type="text" placeholder="User Name">
    <input type="Password" placeholder="Password">
    <div class="login-type">

    </div>
    <select name="" id="">
    <option value="RBACK">RBACK</option>
    <option value="RBACK">Siteminder Account</option>
    </select>
    <button>Signup</button>
    <p class="info ">Use of this system is restricted to individual and activities authorized by the management of OperationsBridge - ESQ. Unauthorized use may result in appropriate disciplinary action and/or legal prosecution</p>
   </div>
    </div>
</template>

<script>
export default {
    setup () {


        return {}
    }
}
</script>

<style  scoped>
.login-container{
    width: 450px;
    padding: 20px 0px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
    border-radius: 10px;
margin: 0px auto;

}

.login{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

}
input{
    padding: 10px 20px;
    outline: none;
    border-radius: 2px;
    border:1px solid rgb(216, 201, 201);
    width: 50%;
}
.login-type{
    position: relative;
    width: 60%;
    height: 1px;
    background: rgb(197, 183, 183);
    margin: 10px 0;

}
.login-type:before{
    position: absolute;
    content: 'Login Type';
    left: 35%;

    top: -12px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    color: rgb(192, 175, 175);
    font-size: 12px;
    }

::placeholder{
    color: rgb(207, 189, 189);
}

select{
    padding:5px 20px;
    border: 1px solid rgb(206, 194, 194);
    color: rgb(129, 120, 120);
    width: 57%;
}


button{
background: rgb(78, 78, 216);
color: #fff;
padding: 10px 20px;
width: 57%;
border: none;
border-radius: 3px;
box-shadow: 0 0 10px rgba(0,0,0,0.2);

}
.info{
    width: 80%;
    text-align: center;
    color: rgb(187, 174, 174);

    }
</style>