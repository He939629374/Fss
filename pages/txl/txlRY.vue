<template>
    <view class="page">
        <view class="content">
            <view class="">
                <view class="v_for" v-for="(list,index) in lists" :key="index" :class="index === lists.length - 1 ? 'uni-list-cell-last' : ''">
                    <view class="uni-list-cell-navigate  uni-navigate-right" hover-class="uni-list-cell-hover" 
                        @click="tabonclick(list.DEPARTMENTID,list.USERID)">
						<view class="v_left">
							<view class="IMG">
								<image class="IMG" :src="list.IMG"></image>
								
							</view>
							<view class="title">
								{{list.USERNAME}}
							</view>
						</view>
						<view class="PHONE">
							{{list.PHONE}}					
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
					    DEPARTMENTID:"1",
						USERNAME: "佛山市",
						USERID: "佛山市",
                        DEPTNAME: "佛山市",
                        DEPTUSERBH: 1,
						PHONE:13266390572,
						IMG:"https://IMG-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
						}]
            }
        },
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log("打印出上个页面传递的参数"); //打印出上个页面传递的参数。
			console.log(option);
			this.lists = JSON.parse(option.res);
		},
        methods: {
			tabonclick(departmentid,userid) {
				uni.navigateTo({
					url: '../user/remsg?read=1&departmentid='+departmentid+'&userid='+userid
				});

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
	.v_left IMG{
		
	}
	.IMG {
		width: 50upx;
		height: 50upx;
		border-radius: 50%;
	}
	.PHONE {
		margin-right: 60upx;
	}
	.page {
		width: 100%;
	}
	.uni-card {
		margin: 20upx;
	}
</style>
