<template>
    <select id="selectCountry" v-on:change="onChange()">
        <option value="0">Semua Negara</option>
        <option v-for="(country, index) of countries" :value="country.iso3">{{ country.name }}</option>
    </select>
</template>

<script>
    export default ({
        props: ['countries'],
        data(){
            return {
                selected: 0
            }
        },
        name: 'Countries',
        methods: {
            onChange: function(){
                const id = document.getElementById('selectCountry');
                this.$emit("getCountryData", id.value )
            }
        }
    })
</script>

<style scoped>
    #selectCountry{
        padding: 10px;
        font-size: 18px;
        background-color: rgba(146, 155, 235, 0.335);
        border-radius: 10px;
        text-align: center;
        border: 0px;
    }
</style>