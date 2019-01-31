<template>
    <view class="page">
        <view class="content">
            <view class="">
                <view class="v_for" v-for="(list,index) in lists" :key="index" :class="index === lists.length - 1 ? 'uni-list-cell-last' : ''">
                    <view class="uni-list-cell-navigate  uni-navigate-right" hover-class="uni-list-cell-hover" 
                        @click="tabonclick(list.userid)">
						<view class="v_left">
							<view class="img">
								<image class="img" :src="list.img"></image>
								
							</view>
							<view class="title">
								{{list.username}}
							</view>
						</view>
						<view class="phone">
							{{list.phone}}					
						</view>	
						
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

	import service from '../../service.js';
    export default {
		components: {
			service
		},
        data() {
            return {
                title: 'list-with-collapses',
                lists: [{
                        username: "佛山市",
                        userid: 1,
						phone:13266390572,
						img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
						},
						{
                        username: "国土",
                        userid: 1,
						phone:"0757-86566318",
						img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
						},
						{
                        username: "资源",
                        userid: 1,
						phone:123268,
						img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
						},
						{
                        username: "城乡规划局",
                        userid: 1,
						phone:123269,
						img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
						}]
            }
        },
        methods: {
			tabonclick(index) {
				console.log(index);
				uni.navigateTo({
					url: '../user/remsg?read=1&userid='+index
				});
// 				const result = service.getTxlRy(index, '', function() {
// 					console.log(result);
// 				});
			}
        }
    }
</script>

<style>
	.uni-list-cell-navigate {
		padding: 10upx 30upx;
	}
	.v_for {
		border: #ffffff solid 1px;
		box-shadow:0px 0upx 20upx #E1E1E1;
		margin-bottom: 10upx;
		border-radius: 8upx;
	}
	.content {
		padding: 20upx;
		background-color:#ffffff;
	}
	.title {
		margin-left: 20upx;
	}
	.v_left {
		display: flex;
		flex-direction: row;
	}
	.v_left img{
		
	}
	.img {
		width: 50upx;
		height: 50upx;
		border-radius: 50%;
	}
	.phone {
		margin-right: 60upx;
	}
	.page {
		width: 100%;
	}
	.uni-card {
		margin: 20upx;
	}
</style>
