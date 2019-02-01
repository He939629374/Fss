<template>
	<view class="content">
		<view class="cover_v">
		<cover-image class="controls-play img" @click="tabS" src="../../static/img//fdj.png"></cover-image>
		</view>
		<view id="tab-bar" class="uni-swiper-tab">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['tab-item','swiper-tab-list',tabIndex==index ? 'active' : '']"
			 :id="tab.id" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			
			<swiper-item v-for="(itemList,index) in tabItems" :key="index">
				<scroll-view class="list" scroll-y="true">
					<uniCard v-for="(itemInfo,index1) in itemList" :key="index1" is-full="true" :title="itemInfo.Title" :itemInfo="itemInfo"
					 thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" note="点击打开" @click="ToDetail(itemInfo.INSID)">					
					</uniCard>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import global from '../../store/Global.js';
	import uniCard from "../../components/uni-card/uni-card.vue";
	import service from "../../service.js";

	export default {
		components: {
			uniCard
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '待办箱',
						id: '1'
					},
					{
						name: '已办箱',
						id: '2'
					},
					{
						name: '办结箱',
						id: '3'
					}
				],
				tabItems: [
					[],
					[],
					[]
				],
				userInfo: {}
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			var self = this;
			this.userInfo = service.getUsers();
			global.checkLogin(self.userInfo, self.forcedLogin, function() {
				self.getData(0);
			});


		},
		methods: {
			tapTab(index) {
				this.tabIndex = index;
				this.getData(index);
			},
			changeTab(event) {
				this.tabIndex = event.detail.current;
				this.getData(this.tabIndex);
			},
			getData(type) {
				uni.showLoading({
					title: '正在加载数据'
				})
				var self = this;
				service.getWorkFlowList(self.userInfo.userid, type, function(res) {
					self.tabItems[type] = res;
					console.log(self.tabItems);
					//swiper组件的bug，要切换一下页面才能渲染到数据
					self.tabIndex=type+1;
					self.tabIndex=type;
					console.log(self.tabIndex);
				})
			},
			ToDetail(insid){
				uni.navigateTo({
					url:"../wfengine/wftaskmain?insid="+insid
				})
			},
			tabS(insid){
				uni.navigateTo({
					url:"../search/search"
				})
			}
		}

	}
</script>

<style>
	page {
		position:absolute;
	}
	.cover_v {
		height:60rpx;
		width:60rpx;
		background-color:#189FFF;
		border-radius:50%;
		display:flex;
		justify-content:center;
		align-items:center;
		position: relative;
		top:80%;
		z-index:999;
		left:90%;

	}
	.uni-swiper-tab {
		background-color: #fff;
	}

	.tab-item {
		flex: 1;
		flex-direction: row;
		width: 33%;
	}

	.active {
		color: #007AFF;
	}

	.swiper-box {
		margin-top: 10px;
		height: 100%;
	}

	.list {
		height: 100%;
	}
	cover-image {
		
		
	}
	.img {
		height:40rpx;
		width:40rpx;
	}
</style>
