<template>
    <div>
        <a name="history"></a>
        <h2 class="title">History</h2>
        <div v-for="item in history">
            <div class="box content item" >
                <p class="title is-5">Input</p>
                <pre class="pre source">{{item.source}}</pre>
                <p class="title is-5">Output</p>
                <pre class="pre result">{{item.result}}</pre>
            </div>
        </div>
        <div v-if="history.length == 0">
            <p class="subtitle">
                Nothing here yet, run a paragraph first.
            </p>
        </div>

    </div>
</template>

<script>

    import HistoryApi from '../core/historyApi'
    const historyApi = new HistoryApi();

    export default {
        name: 'HistoryList',
        data() {
            return { 
                history: []
            }
        },
        bind: function () {
            this.fetchHistory()
        },
        methods: {
            fetchHistory: function() {
                historyApi.call()
                    .then((data) => {
                        this.history = data.history;
                        return;
                        this.history.splice(this.history.length);
                        history.map(element => {
                            this.history.push(element)
                        });
                    })
            }
        },
        created: function() {
            this.$parent.$on('historyUpdated', this.fetchHistory);
        }
    }
</script>
