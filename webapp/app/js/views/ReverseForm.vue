<template>
    <div class="reveres-form">
        <h2 class="title">Input</h2>                    
        <div class="field">
            <label class="label">Enter paragraph</label>
            <div class="control">
                <textarea class="textarea" v-model="input" cols="20" rows="6" placeholder="Enter your text here"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" v-on:click="sendReverse">Submit</button>
            </div>
        </div>
        <h2 class="title">Output</h2>
        <pre class="pre">{{output}}</pre>
    </div>
</template>


<script>
    import ReverseApi from '../core/reverseApi.js'
    const reverseApi = new ReverseApi();

    export default {
        name: 'ReverseForm',
        data() {
            return {
                input: '',
                output: ''
            }
        },
        methods: {
            sendReverse (event) {
                reverseApi.call(this.input)
                    .then((resp) => {
                        this.output = resp.output
                        this.$emit("reverseSubmitted")
                    })
            }
        }
    }
</script>
