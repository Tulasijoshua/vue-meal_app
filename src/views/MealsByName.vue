<template>
    <div class="p-8 pb-0">
        <input type="text" 
            v-model="keyword"
            class="w-full rounded border-2 border-gray-200" 
            placeholder="Search for Meals" 
            @change="searchMeals"
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div class="bg-white shadow rounded-2xl" v-for="meal of meals" :key="meal.idMeal">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img class="rounded-t-xl w-full h-48 object-cover" :src="meal.strMealThumb" :alt="meal.strMeal">
            </router-link>
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiat assumenda 
                    veritatis architecto!
                </p>
                <div class="flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 text-white rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 hover:text-white transition-colors">
                        YouTube
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';
import store from '../store';

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