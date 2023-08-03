<template>

<section >
  <div class="  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div class=" mainForm w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl  text-center font-bold leading-tight tracking-tight  md:text-2xl ">
                  انشاء حساب 
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="fullName" class="block mb-2 text-sm font-medium"> الاسم كامل</label>
                      <input type="text" name="email" id="fullName" class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg . ahmed gamal" required="">
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium">البريد الالكترونى</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium dark:text-white">كلمة المرور</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-mediumdark:text-white">تاكيد كلمة المرور </label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-start">
                     
                    
                  </div>
                  <button type="submit" class="w-full bg-white text-[#313A49] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">انشاء حساب</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     املك جساب بالفعل? <button @click="$emit('ToggleMood')" class="font-medium text-primary-600 hover:underline dark:text-primary-500">تسجيل الدخول </button>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>

.mainForm {
    background: rgba(0,0,0,.6);
    color:white;
}
</style>