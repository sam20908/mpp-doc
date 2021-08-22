<template>
  <div id="home">
    <div
      class="
        text-white
        roboto-text
        flex
        jumbotron-bg
        py-20
        items-center
        justify-center
      "
    >
      <img src="@/assets/logo256.png" alt="" class="jumbotron-logo mr-20" />
      <div class="w-1/3">
        <p class="text-7xl font-bold pb-10">mpp</p>
        <p class="text-3xl font-extralight">
          Want to use matrices within your C++ application? Look no further with
          mpp.
        </p>
      </div>
    </div>
    <div style="background-color: #1e1e1e">
      <table class="table-fixed mx-auto container">
        <thead>
          <tr>
            <th class="w-1/2"></th>
            <th class="w-1/2"></th>
          </tr>
        </thead>
        <tbody class="roboto-text items-center">
          <tr>
            <td class="p-10">
              <img src="@/assets/demo-initialization.png" alt="" />
            </td>
            <td class="p-10">
              <div class="text-center text-white">
                <p class="text-6xl font-extrabold mb-10">SIMPLE TO USE</p>
                <p class="text-xl text-justify font-light">
                  mpp was designed with simplicity in mind. The way you use mpp
                  is very straightforward and the API was designed to be easy to
                  understand. Let mpp do the dirty work for you.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-10">
              <img src="@/assets/demo-math.png" alt="" />
            </td>
            <td class="p-10">
              <div class="text-center text-white">
                <p class="text-6xl font-extrabold mb-10">LOTS OF MATH</p>
                <p class="text-xl text-justify font-light">
                  mpp supports various matrix operations like <b>transpose</b>,
                  <b>determinant</b>, <b>inverse</b>, and more. It also utilizes
                  expression template to allow efficient computation of matrix
                  arithmetic operations.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-10">
              <img src="@/assets/demo-customization-overload.png" alt="" />
            </td>
            <td class="p-10">
              <div class="text-center text-white">
                <p class="text-6xl font-extrabold mb-10">CUSTOMIZABLE</p>
                <p class="text-xl text-justify font-light">
                  mpp implements all of its operations as a <b>CPO</b> (<i
                    >custoimzation point object</i
                  >), which means you can provide your own type and overload of
                  the algorithm to make it work for your own type.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="roboto-text mt-10 items-center text-center mx-auto container mb-10"
    >
      <p class="text-3xl font-bold mb-5">
        Interested in mpp? Check out the links below
      </p>
      <button
        class="
          bg-gradient-to-r
          from-pink-700
          via-red-500
          to-yellow-500
          text-white
          rounded-xl
          py-2
          px-10
          text-3xl
          font-bold
        "
        onclick="window.location.href='https://github.com/sam20908/mpp/';"
      >
        GitHub
      </button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.roboto-text {
  font-family: 'Roboto', sans-serif;
}

.jumbotron-bg {
  background: url("../assets/banner.png");
}
</style>
