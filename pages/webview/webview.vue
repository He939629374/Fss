<template>
    <view>
        <web-view :src="thisurl"></web-view>
    </view>
</template>

<script>
	import Global from '../../store/Global.js';
	import service from "../../service.js";
    export default {
		components: {Global,service},
        data() {
            return {
                thisurl: 'list-triplex-row',
            }
        },
        onLoad(option) {
			var self = this;
			this.thisurl = option.url;
        },
		methods: {

		}
    }
</script>

<style>
</style>
