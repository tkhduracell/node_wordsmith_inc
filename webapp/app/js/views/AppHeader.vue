<template>
    <div class="columns">
        <div class="column">
            <h1>{{name}}</h1>
            <p class="title">Welcome to {{name}}</p>
            <p class="subtitle">
                System is also availible as an <a href="/docs">api.</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        props: ['name']
    }
</script>