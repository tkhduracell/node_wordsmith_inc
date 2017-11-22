<template>
    <div>
        <AppHeader :name="name"></AppHeader>
        <div class="columns">
            <div class="column">
                <ReverseForm @reverseSubmitted="reverseSubmitted"></ReverseForm>
            </div>
            <div class="column">
                <HistoryList></HistoryList>
            </div>
        </div>
    </div>
</template>

<script>
    import HistoryList from './HistoryList.vue'
    import ReverseForm from './ReverseForm.vue'
    import AppHeader from './AppHeader.vue'

    export default {
        name: 'MainView',
        data() {
            return {
                name: 'Wooordsmith Inc.'
            }
        },
        components: {
            HistoryList, 
            ReverseForm, 
            AppHeader
        },
         methods: {
            reverseSubmitted () { 
                this.$emit('historyUpdated');
            }
         }
    }
</script>