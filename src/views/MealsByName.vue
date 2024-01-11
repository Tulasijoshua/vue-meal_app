<template>
    <div class="p-8 pb-0">
        <input type="text" 
            v-model="keyword"
            class="w-full rounded border-2 border-gray-200" 
            placeholder="Search for Meals" 
            @change="searchMeals"
        />
    </div>
    <Meals :meals="meals" />

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';
import store from '../store';
import YouTubeButton from '../components/YouTubeButton.vue';
import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals);

    function searchMeals() {
        store.dispatch('searchMeals', keyword.value)
    }
                    
    onMounted(() => {
        keyword.value = route.params.name
        if (keyword.value) {
            searchMeals()
        }
    })
</script>

<style scoped>

</style>