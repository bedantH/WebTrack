<script>
  import Categories from "./category/categories.svelte";
  import Progress from "./progress.svelte";

</script>

<section class="mx-5 my-4">
  <h1 class="text-2xl font-semibold w-full my-5">Welcome!, Let's get you some productivity.</h1>
  <Progress />
  <Categories />
  <button class="bg-primary w-full py-3 mt-5 text-white rounded-sm">
    Start focus session
  </button>
</section>