<template>
  <div id="home">
    <div class="bg-gray-500">
      <div class="container mx-auto p-10">
        <div class="grid grid-cols-2 text-white">
          <div class="inline-flex items-center justify-between">
            <img src="@/assets/logo128.png" alt="" class="mr-10" />
            <div class="mx-auto">
              <h1 class="text-4xl font-extrabold mb-5">mpp</h1>
              <p class="text-lg">
                Built with friendliness. Avoids long verbose names. Written with
                performance in mind. Utilizes modern C++.
                <i>Your next C++ matrix library.</i>
              </p>
            </div>
          </div>
          <div class="mx-auto">
            <h1 class="text-4xl font-extrabold mb-5">Some neat features:</h1>
            <ul class="list-disc text-lg">
              <li>Lazy evaluation</li>
              <li>Broad customization</li>
              <li>Nice syntax sugar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-400">
      <div class="container mx-auto p-10 text-white">
        <h1 class="code-header">How to get started?</h1>
        <highlightjs lang="cmake" :code="getStartedCMakeCode" class="code" />
        <highlightjs lang="cpp" :code="getStartedCppCode" class="code" />
      </div>
    </div>
    <div class="bg-gray-600">
      <div class="container mx-auto p-10 text-white">
        <h1 class="code-header">Lazy evaluation?</h1>
        <highlightjs lang="cpp" :code="lazyEvalCode" class="code" />
        <h1 class="code-header">Broad customization?</h1>
        <highlightjs lang="cpp" :code="broadCustomizeCfgCode" class="code" />
        <highlightjs
          lang="cpp"
          :code="broadCustomizeTagInvokeCode"
          class="code"
        />
        <h1 class="code-header">Nice syntax sugar?</h1>
        <highlightjs lang="cpp" :code="syntaxSugarCode" class="code" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import hljsVuePlugin from "@highlightjs/vue-plugin";

@Options({
  components: {
    highlightjs: hljsVuePlugin.component,
  },
})
export default class Home extends Vue {
  getStartedCMakeCode = `add_subdirectory("mpp")

target_link_libraries(your_target mpp::mpp)
`;

  getStartedCppCode = `#include <mpp/mpp.hpp>
`;

  lazyEvalCode = `mpp::mat a({1, 2, 3}, {4, 5, 6}});
mpp::mat b({{1, 2, 3}, {4, 5, 6}});

auto expr = a + b; // Not evaluated

expr(0, 0); // Evaluates result at (1, 1) only
mpp::mat(expr); // Evaluated fully
`;

  broadCustomizeCfgCode = `#include <mpp/utility/cfg.hpp>

namespace mpp
{
  template<>
  struct cfg<override>
  {
    template<typename Val>
    using alloc = my_custom_allocator<Val>;

    static constexpr std::size_t rows_extent = 10;
    static constexpr std::size_t cols_extent = 10;

    template<typename Val, std::size_t Rows, std::size_t Cols, typename>
    using fixed_buf = std::array<Val, 1>;

    template<typename Val, std::size_t, std::size_t, typename Alloc>
    using dyn_buf = std::array<Val, 2>;

    template<typename Val, std::size_t, std::size_t Cols, typename Alloc>
    using dyn_rows_buf = std::array<Val, 3>;

    template<typename Val, std::size_t Rows, std::size_t, typename Alloc>
    using dyn_cols_buf = std::array<Val, 4>;
  };
}

#include <mpp/mpp.hpp>

mpp::mat<int> m;
m.rows_extent(); // 10
m.cols_extent(); // 10

using buf_t = typename mat<int, mpp::dyn, mpp::dyn>::buffer_type;
// ^ std::array<int, 2>

using alloc = typename mat<int, mpp::dyn, mpp::dyn>::allocator_type;
// ^ my_custom_allocator<int>
`;

  broadCustomizeTagInvokeCode = `namespace ns
{
  struct dumb_matrix {};

  [[nodiscard]] auto tag_invoke(mpp::det_t, dumb_matrix) -> int
  {
    return 2000;
  }
}

ns::dumb_matrix dummy;
mpp::det(dummy); // 2000
`;

  syntaxSugarCode = `mpp::mat<int> a({{1, 2, 3}, {4, 5, 6}});

auto [l, u] = mpp::lu(a);
`;
}
</script>

<style lang="stylus" scoped>
.code-header {
  @apply: text-6xl;
  @apply: font-extrabold;
  @apply: text-center;
  @apply: mb-16;
}

.code {
  @apply: w-3 / 4;
  @apply: mx-auto;
  @apply: mb-10;
}
</style>
