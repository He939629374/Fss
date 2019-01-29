<template>
	<view></view>
</template>

<script>
	import service from '../../service.js'
	export default {
		onLoad: function(option) {
			var fileid = option.fileid;
			this.DownLoadFile(fileid);
		},
		methods: {
			DownLoadFile(fileid) {
				// 				uni.showToast({
				// 					title:fileid
				// 				})
				service.downLoadFileByWorkFlow(fileid)
			}
		}
	}
</script>

<style>
</style>
