<template>
    <view class="page">
        <page-head :title="title"></page-head>
        <view class="uni-list2">
            <block v-for="(items,index) in lists" :key="index">
                <view class="v-block"  hover-class="uni-list-cell-hover" @click="goto(items.gotourl)">
                    <view class="uni-triplex-row">
                        <view style="width: 100%;">
							<view class="uni-title uni-ellipsis title">
								<text style="font-size: 34upx;color: #000000;">{{items.title}}</text>
								<uni-icon type="arrowright" size="24"></uni-icon>
							</view>
							<view v-for="(itemss,i) in items.items" :key="i" class="uni-text-v">
								<text class="">{{itemss.name}}:{{itemss.text}}</text>
							</view>                            
                        </view>
                    </view>
                </view>
            </block>
        </view>
    </view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue";
	import uniCard from "@/components/uni-card/uni-card.vue";
	import Global from '../../store/Global.js';
	import service from "../../service.js";
    export default {
		components: {uniCard,uniIcon,Global,service},
        data() {
            return {
                title: 'list-triplex-row',
                lists: [
// 					{title:'1',
//					 gotourl:'',
// 					items:[{name:'编号',text:'4406'},{name:'时间',text:'4406'},{name:'单位',text:'4406'}]},
// 					{title:'2',
//					 gotourl:'',
// 					items:[{name:'编号',text:'4406'},{name:'时间',text:'4406'},{name:'单位',text:'4406'}]},
// 					{title:'3',
//					 gotourl:'',
// 					items:[{name:'编号',text:'4406'},{name:'时间',text:'4406'},{name:'单位',text:'4406'}]}
					]
            }
        },
        onLoad(option) {
			var self = this;
			console.log(option);
			var userInfo = service.getUsers();	
			var USERID = userInfo.userid;
			console.log(userInfo);
			var result = service.getMsgContent(option.GRIDID,USERID,function(res) {									
					console.log(res);
					self.lists = res.rs;
					uni.setNavigationBarTitle({
						title: res.rs2
					});
				});	
        },
		methods: {
			goto(gotourl){
				console.log(gotourl.indexOf('http'));
				if(gotourl.indexOf('http')>=0)
				{
					uni.navigateTo({
						url: '../webview/webview?url=' + gotourl
					});	
				}else
				{
					uni.navigateTo({
						url: gotourl
					});	
				}

			}

		}
    }
</script>

<style>
	.v-block {
		background-color: #FFFFFF;
	}
	.uni-triplex-row {
		box-shadow:0px 0px 20rpx #CACACA;
		margin-bottom:25px;
		border-radius: 2%;
		padding:0rpx;
	}
	.uni-title {
		padding: 10upx 20upx;
	}
	.uni-text-v {
		font-size: 28upx;
		padding: 5upx 20upx;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-itemss: center;
		border-style:solid;
		border-width:0px;
		border-bottom-width:1px;
		border-color: #CACACA;
	}
	.uni-list2 {
		width: 90%;
		margin: 40upx 5%;
	}
	.page {
		width: 100%;
		background-color: #EFEFF4;
	}
</style>
