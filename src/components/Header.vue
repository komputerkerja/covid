<template>
    <div class="header">
        <div class="content">
            <h2>Terkonfirmasi : {{ confirmed }} Kasus</h2>
            <h2>Meninggal : {{ deaths }} Kasus</h2>
            <p class="tgl">Update {{ lastUpdate }}</p>
        </div>
    </div>
</template>

<script>
    export default ({
        props: ['confirmed','deaths', 'lastUpdate'],
        name: 'Header'
    })
</script>

<style scoped>
    .tgl{
        color: brown;
    }
</style>