<template>
  <div class="sidebar">
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar"
      width="320px"
      backdrop-variant="light"
      backdrop
      shadow
      no-slide
    >
      <NavList :user="user"/>
    </b-sidebar>
  </div>
</template>

<script>
import NavList from "@/components/NavList";

export default {
  name: "Sidebar",
  props: ["user"],
  components: { NavList },
};
</script>

<style scoped></style>
