<template>
  <nav
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl mt-0"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :color="color" />
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center ms-md-auto"
        >
          <material-input id="search" label="Tìm kiếm" />
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-body lh-1"
              id="iconNavbarSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li
            class="nav-item dropdown d-flex align-items-center pe-2"
          >
            <a
              href="#"
              class="p-0 nav-link lh-1"
              :class="[color ? color : 'text-body', showMenu ? 'show' : '']"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <i class="material-icons cursor-pointer"> account_circle </i>
            </a>
            <ul
              class="px-2 py-2 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <i class="material-icons cursor-pointer"> logout </i>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 mx-2 text-sm font-weight-normal">
                        Đăng xuất
                      </h6>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import MaterialInput from "@/components/MaterialInput.vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  props: ["minNav", "color"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),

    toggleSidebar() {
      this.navbarMinimize();
    },
  },
  components: {
    Breadcrumbs,
    MaterialInput,
  },
  computed: {
    ...mapState(["isRTL", "isAbsolute"]),

    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
