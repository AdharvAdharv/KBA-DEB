import React from 'react'

const Login = () => {
  return (
    <body class="flex justify-center mt-20">
    <div class="bg-slate-400 w-96 h-auto pr-4 pl-12 rounded-md ... ">
        <div class="mt-6">

            <p class="font-bold text-3xl font-serif	">Login</p>
        </div>
        <div class="mt-6">

            <label class="text-xl font-serif	" for="email">Email :</label>
        </div>
        <div>

            <input class="rounded-md ..." type="email" />
        </div>
        <div class="mt-6">
            <label class="text-xl font-serif	"  for="password">Password :</label>
        </div>
        <div>
            <input type="password" class="rounded-md ..." />
        </div>
        <div class="mt-6 ">

            <a href="" class="text-xl font-serif "> Forgot password ?</a>
            
            <div class="inline ml-12"><button class=" bg-fuchsia-900 text-white font-bold rounded w-[110px] h-[35px]" type="submit">Login</button>
        </div>
    </div>
             
        <div class="mt-6 mb-6" >
            <p class="text-xl font-serif	">Don't have a account ? <a class="text-blue-600 font-serif	" href="SignUp.html">Sign Up</a> </p>
        </div>
    </div>
    
</body>
  )
}

export default Login