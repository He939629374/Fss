<template>
	<view class="content">
		<web-view :src="formsrc"></web-view>
	</view>
</template>

<script>
	//import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
// 		components: {
// 			uniSegmentedControl
// 		},
        onLoad(option) {
        	this.formsrc+=option.insid;
        },
		data() {
			return {
				items: ['表单', '流程', '附件'],
				current: 0,
				insid: '',
				caseid: '',
				formsrc: 'http://172.16.5.94/FSSGMIS_Mobile_alpha/MobileWorkFlow/WFTaskMain?InsId='
			}
		},
		methods: {
		
		}
	}
</script>

<style>
	.head {
		height: 10%;
	}

	.Main {
		height: 90%;
	}
</style>
