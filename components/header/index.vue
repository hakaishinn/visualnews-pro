<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contents">
    <header
      class="text-[12px] text-white bg-gradient-to-r from-[#0c91e3] to-[#8d4cce]"
    >
      <div
        class="llt:max-w-[1240px] mmb:w-full llt:px-0 mb:px-[10px] flex justify-between items-center mx-auto h-full"
      >
        <!-- icon MENU -->
        <div
          class="lt:hidden mb:block py-[10px]"
          @click="handleOnOffModalHeader(true)"
        >
          <iconMenu />
        </div>

        <div class="lt:flex mb:hidden justify-start items-center gap-4">
          <nuxt-link to="/about" class="font-medium block py-[10px]"
            >About</nuxt-link
          >
          <nuxt-link to="/contact" class="font-medium block py-[10px]"
            >Contact</nuxt-link
          >
          <nuxt-link
            to="/full-width-page"
            class="font-medium py-[10px] flex justify-center items-center relative group"
          >
            <span>Full Width Page</span>
            <iconArrowDown :width="12" :height="12" />
            <div
              class="hidden group-hover:block absolute bottom-0 left-0 px-4 bg-white text-[#222] shadow-md translate-y-[100%] min-w-[200px]"
            >
              <nuxt-link to="/full-width-page" class="block py-[10px] border-b"
                >Sub Menu 1</nuxt-link
              >
              <nuxt-link to="/full-width-page" class="block py-[10px] border-b"
                >Sub Menu 2</nuxt-link
              >
              <nuxt-link to="/full-width-page" class="block py-[10px]"
                >Sub Menu 3</nuxt-link
              >
            </div>
          </nuxt-link>
          <nuxt-link to="/submit-artical" class="font-medium block py-[10px]"
            >Submit Article</nuxt-link
          >
          <nuxt-link to="#" class="font-medium block py-[10px]"
            >Buy Theme</nuxt-link
          >
        </div>

        <div class="flex justify-center items-center gap-[10px] text-white">
          <!-- twitter -->
          <div class="hover:scale-110 cursor-pointer">
            <iconTwitter :width="16" :height="16" />
          </div>
          <!-- fb -->
          <div class="hover:scale-110 cursor-pointer">
            <iconFacebook :width="16" :height="16" />
          </div>
          <!-- ytb -->
          <div class="hover:scale-110 cursor-pointer">
            <iconYoutube :width="16" :height="16" />
          </div>
          <!-- linked -->
          <div class="hover:scale-110 cursor-pointer">
            <iconLinkedIn :width="16" :height="16" />
          </div>
          <!-- Dribbble -->
          <div class="hover:scale-110 cursor-pointer">
            <iconDribbble :width="16" :height="16" />
          </div>
          <!-- instagram -->
          <div class="hover:scale-110 cursor-pointer">
            <iconInstagram :width="16" :height="16" />
          </div>
        </div>
      </div>
    </header>

    <!-- title -->

    <div
      class="mb:hidden container mx-auto lt:grid grid-cols-10 gap-8 pt-[35px] pb-[20px] leading-[1.6]"
    >
      <div class="flex justify-center items-center gap-5 col-span-3">
        <div class="flex-1">
          <p class="text-black text-base font-semibold text-right">John Doe</p>
          <p class="text-[#999] text-[12px] justify-end text-right font-normal">
            If you want to make your dreams come true, the first thing you have
            to do is wake up.
          </p>
        </div>

        <div class="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            class="object-contain"
            src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-1.png"
            alt="avatar"
          />
        </div>
      </div>

      <div class="flex flex-col justify-between items-center col-span-4">
        <span class="font-semibold text-[21.8124px] text-[#222] mb-2"
          >VISUALNEWSPRO
        </span>
        <span class="text-[17px] text-[#cf2c2e] font-medium"
          >WP NEWSPAPER THEME</span
        >
      </div>

      <div class="flex justify-center items-center gap-5 col-span-3">
        <div class="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            class="object-contain"
            src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-2.png"
            alt="avatar"
          />
        </div>

        <div class="flex-1">
          <p class="text-black text-base font-semibold text-start">
            Marry Taylor
          </p>
          <p
            class="text-[#999] text-[12px] justify-start text-start font-normal"
          >
            You can have anything you want if you are willing to give up
            everything you have.
          </p>
        </div>
      </div>
    </div>

    <!-- navbar -->
    <nav
      class="shadow-[0_5px_10px_-5px_rgba(0,0,0,0.3)] lt:sticky top-0 right-0 left-0 bg-white mb-6 z-10 py-[5px]"
    >
      <div
        class="llt:max-w-[1240px] llt:px-0 mb:px-[10px] mx-auto flex justify-between items-center relative"
      >
        <span
          class="mb:block lt:hidden uppercase font-semibold text-[20px] py-4"
          >visualnews pro</span
        >
        <div class="hidden lt:flex flex-wrap justify-start items-center gap-5">
          <nuxt-link
            to="/"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >HOME
          </nuxt-link>
          <nuxt-link
            to="/category/advertising"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >ADVERTISING
          </nuxt-link>
          <nuxt-link
            to="/category/blogging"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600 flex justify-center items-center relative group"
          >
            <span>BLOGGING</span>
            <iconArrowDown :width="12" :height="12" />
            <div
              class="hidden group-hover:block absolute bottom-0 left-0 px-4 bg-white text-[#222] shadow-md translate-y-[100%] min-w-[200px]"
            >
              <p class="py-[10px] border-b hover:text-sky-600 uppercase">
                Sub Menu 1
              </p>
              <p class="py-[10px] border-b hover:text-sky-600 uppercase">
                Sub Menu 2
              </p>
              <p class="py-[10px] hover:text-sky-600 uppercase">Sub Menu 3</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/category/business"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >BUSINESS
          </nuxt-link>
          <nuxt-link
            to="/category/fashion"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >FASHION
          </nuxt-link>
          <nuxt-link
            to="/category/food"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >FOOD
          </nuxt-link>
          <nuxt-link
            to="/category/lifestyle"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >LIFESTYLE
          </nuxt-link>
          <nuxt-link
            to="/category/marketing"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >MARKETING
          </nuxt-link>
          <nuxt-link
            to="/category/seo"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >SEO
          </nuxt-link>
          <nuxt-link
            to="/category/social-media"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >SOCIAL MEDIA
          </nuxt-link>
          <nuxt-link
            to="/category/tech"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >TECH
          </nuxt-link>
          <nuxt-link
            to="/category/travel"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >TRAVEL
          </nuxt-link>
          <nuxt-link
            to="/category/web-design"
            class="font-semibold text-[#222] text-[13px] py-[10px] hover:text-sky-600"
            >WEB DESIGN
          </nuxt-link>
        </div>

        <div class="text-black flex items-center gap-5">
          <div
            class="lt:hidden mmb:block py-[10px]"
            @click="handleOnOffModalNavbar(true)"
          >
            <iconMenu />
          </div>
          <div class="cursor-pointer">
            <div class="hover:text-sky-600" @click="isShowSearch = true">
              <iconSearch
                v-if="isShowSearch == false"
                :width="16"
                :height="16"
              />
            </div>
            <!-- icon close / search -->
            <div
              class="hover:text-sky-600"
              @click="
                () => {
                  isShowSearch = false
                  searchValue = ''
                }
              "
            >
              <iconClose v-if="isShowSearch == true" :width="16" :height="16" />
            </div>

            <!-- search box -->
            <div :class="`${isShowSearch == true ? 'block' : 'hidden'}`">
              <div
                :class="`p-4 bg-white z-10 absolute bottom-0 right-0 translate-y-[100%] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] justify-center items-center flex max-w-[305px]`"
              >
                <div
                  class="relative text-sky-800 max-w-[305px] h-[36px] leading-[36px]"
                >
                  <input
                    ref="input"
                    v-model="searchValue"
                    type="text"
                    placeholder="Search for"
                    class="block w-full h-full pl-[15px] pr-[31px] py-[7px] bg-[#f5f5f5] outline-none placeholder-[#222] text-[#222] text-[14px]"
                  />
                  <div
                    v-if="searchValue != ''"
                    class="absolute top-[50%] right-4 translate-y-[-50%]"
                    @click="deleteSearchValue()"
                  >
                    <iconClose :width="16" :height="16" />
                  </div>
                </div>
                <button
                  class="bg-sky-500 text-white font-semibold px-[15px] leading-[36px]"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- modal -->
    <modalHeader
      v-if="isShowModal.header == true"
      @handle-on-off-modal-header="handleOnOffModalHeader"
    />
    <modalNavbar
      v-if="isShowModal.navbar == true"
      @handle-on-off-modal-navbar="handleOnOffModalNavbar"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import iconArrowDown from '~/components/icons/arrowdown.vue'
import iconSearch from '~/components/icons/search.vue'
import iconClose from '~/components/icons/close.vue'
import iconFacebook from '~/components/icons/facebook.vue'
import iconTwitter from '~/components/icons/twitter.vue'
import iconYoutube from '~/components/icons/youtube.vue'
import iconLinkedIn from '~/components/icons/linkedin.vue'
import iconDribbble from '~/components/icons/dribbble.vue'
import iconInstagram from '~/components/icons/instagram.vue'
import iconMenu from '~/components/icons/menu.vue'
import modalHeader from '~/components/modal/modalHeader.vue'
import modalNavbar from '~/components/modal/modalNavbar.vue'

const searchValue = ref('')
const isShowSearch = ref(false)
const input = ref(null)

const isShowModal = ref({
  header: false,
  navbar: false,
})

function handleOnOffModalHeader(status) {
  isShowModal.value.header = status
}
function handleOnOffModalNavbar(status) {
  isShowModal.value.navbar = status
}

const deleteSearchValue = () => {
  if (input.value) {
    searchValue.value = ''
    input.value.focus()
  }
}
</script>