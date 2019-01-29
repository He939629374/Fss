<template>
    <view class="page">
        <view class="uni-card">
            <view class="uni-list">
                <view class="uni-list-cell uni-collapse" v-for="(list,index) in lists" :key="index" :class="index === lists.length - 1 ? 'uni-list-cell-last' : ''">
                    <view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="list.show ? 'uni-active' : ''"
                        @click="trigerCollapse(index)">
						<view class="v_left">
							<view >
								<image class="img" src="../../static/img/txlZZJG.png"></image>
							</view>
							<view class="title">
								{{list.title}}
							</view>
						</view>
                        
						<view class="count">
							({{list.count}}人)
						</view>
                    </view>

                    <view class="uni-list uni-collapse" :class="list.show ? 'uni-active' : ''">
                        <view class="uni-list-cell" hover-class="uni-list-cell-hover" 
						v-for="(item,key) in list.item" :key="key" :class="key === list.item.length - 1 ? 'uni-list-cell-last' : ''"
						@click="tabonclick(item.userid)">
                            <view class="uni-list-cell-navigate uni-navigate-right"> {{item.title}} </view>
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
                        title: "佛山市国土资源和城乡规划局",
                        show: false,
						count: 158,
                        item: [{"title":"科长1","userid":"1"} ,
						{"title":"科长1","userid":"1"},
						{"title":"科长1","userid":"1"}]
                    },
                    {
                        title: "佛山市城市规划设计研究院",
                        show: false,
						count: 3,
                        item: [{"title":"科长1","userid":"1"} ,
                        {"title":"科长1","userid":"1"},
                        {"title":"科长1","userid":"1"}]
                    },
                    {
                        title: "佛山市测绘地理信息研究院",
                        show: false,
						count: 2,
                        item: [{"title":"科长1","userid":"1"} ,
                        {"title":"科长1","userid":"1"},
                        {"title":"科长1","userid":"1"}]
                    }
                ]
            }
        },
        methods: {
            trigerCollapse(e) {
                for (let i = 0, len = this.lists.length; i < len; ++i) {
                    if (e === i) {
                        this.lists[i].show = !this.lists[i].show;
                    } else {
                        this.lists[i].show = false;
                    }
                }
            },
			tabonclick(index) {
				uni.navigateTo({
					url: '../txl/txlRY'
				});
				console.log(index);
// 				const result = service.getTxlRy(index, '', function() {
// 					console.log(result);
// 				});
			}
        }
    }
</script>

<style>
	.title {
		margin-left: 30upx;
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
	}
	.count {
		color:#C0BFBF;
		font-size: 24upx;
		margin-right: 50upx;
	}
	.page {
		width: 100%;
	}
	.uni-card {
		margin: 0px;
	}
</style>
