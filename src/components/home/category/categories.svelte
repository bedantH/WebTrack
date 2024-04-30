<script lang="ts">
  import CategoryCard from "./category_card.svelte";

  let total = 13;

  let categories = [
    {
      category: "Productivity",
      value: 4,
      icon: "material-symbols-light:productivity-outline",
      total
    },
    {
      category: "Entertainment",
      value: 3,
      icon: "akar-icons:game-controller",
      total,
    },
    {
      category: "Research",
      value: 2,
      icon: "iconoir:brain-research",
      total,
    },
    {
      category: "Other",
      value: 4,
      icon: "mage:question-mark-circle",
      total,
    }
  ];
</script>

<section>
  <h2 class="text-[16px] font-semibold my-2">Categories</h2>
  <div class="grid grid-cols-2 gap-4">
    {#each categories as category}
      <CategoryCard
        bind:icon={category.icon}
        bind:category={category.category}
        bind:value={category.value}
        bind:total={total}
      />
    {/each}
  </div>
</section>