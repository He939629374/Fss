<template>
    <view class="page">
        <page-head :title="title"></page-head>
        <view class="uni-list2">
            <block v-for="(item,index) in lists" :key="index">
                <view class="v-block"  hover-class="uni-list-cell-hover">
                    <view class="uni-triplex-row">
                        <view style="width: 100%;">
							<view class="uni-title uni-ellipsis title">
								<text style="font-size: 34upx;color: #000000;">{{item.title}}</text>
								<uni-icon type="arrowright" size="24"></uni-icon>
							</view>
							<view v-for="(items,i) in item.item" :key="i" class="uni-text-v">
								<text class="">{{items.name}}:{{items.text}}</text>
							</view>
                            
                        </view>
<!-- 						<view class="uni-triplex-right">
							
						</view> -->
                    </view>
                </view>
            </block>
        </view>
    </view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniCard from "@/components/uni-card/uni-card.vue"
    export default {
		components: {uniCard,uniIcon},
        data() {
            return {
                title: 'list-triplex-row',
                lists: [
					{title:'1',
					item:[{name:'编号',text:'4406'},{name:'时间',text:'4406'},{name:'单位',text:'4406'}]},
					{title:'2',
					item:[{name:'编号',text:'4406'},{name:'时间',text:'4406'},{name:'单位',text:'4406'}]},
					{title:'3',
					item:[{name:'编号',text:'4406'},{name:'时间',text:'4406'},{name:'单位',text:'4406'}]}
					]
            }
        },
        onLoad() {
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
		align-items: center;
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
