<template>
	<view class="content">
		<view class="content_s">
			<view v-for="(item,index) in list" :key="index" class="pick_vfor">
						<view class="pick_vfor_title" @click="item.issel==1?item.issel=0:item.issel=1">
							<view class="wfnodename">{{item.wfnodename}}</view>
							<view class="pick_vfor_title_r" >
								<uni-icon type="arrowright" size="30" v-if="item.issel==0"></uni-icon>
								<uni-icon type="arrowdown" size="30" v-else></uni-icon>
							</view>
						</view>

							<view class="pick_vfor_content" v-if="item.issel==1">
								<view v-for="(items,indexs) in item.userlist" :key="indexs" class="pick_vfor_vfor" >
									<view class="pick_vfor_vfor_block">
										<view class="pick_vfor_vfor_l">
											<view class="image"><image class="LOGO" src="../../static/img/TX2.png"/></view>
											<view class="pick_vfor_vfor_l_title">{{items.username}}</view>
										</view>
									</view>
									<view class="pick_vfor_vfor_r " @click="gclick(items.userid,item.wfnodecode)"><image class="del" :src="items.issel==1 ? '../../static/img/issel.png' : '../../static/img/nosel.png'" /></view>
								</view>
							</view>
			</view>
		</view>
		
		<view class="bottom_text">
			<view class="bottom_l" @click="BaorCo('back')">返回</view>
			<view class="bottom_r" @click="BaorCo('confirm')">确认</view>
		</view>
	</view>
</template>

<script>
import uniIcon from "@/components/uni-icon/uni-icon.vue"
import service from "../../service.js";
import Global from '../../store/Global.js';
export default {
	components: {uniIcon,service,Global},
	data() {
		return {
			useridlist: [], 
			list:[
				{
					wfnodecode:123,
					wfnodename:"(南海)科长1",
					userlist:[
						{userid:1,username:"A科长",issel:1},
						{userid:2,username:"B科长",issel:0}
					],
					issel:0,
				},
				{
					wfnodecode:1232,
					wfnodename:"(南海)科长2",
					userlist:[
						{userid:3,username:"A科长2",issel:1},
						{userid:4,username:"B科长2",issel:0}
					],
					issel:1,
				},
				]
		}
	},
	onLoad() {
	},
	methods: {
		BaorCo(_type) {
			var self = this;
			if(_type=="back"){
				uni.navigateBack({
					delta: 1
				});
			}else{
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				prevPage.setData({
				        BackUserid:self.useridlist
				})
				uni.navigateBack();
			}
		},
		gclick(userid,wfnodecode) {//删除已选人员
			var self = this;
			self.useridlist = [];
			console.log(userid)	;
			for(let i =0;i<self.list.length;i++)
			{
				if(wfnodecode==self.list[i].wfnodecode)
				{
					for(let j =0;j<self.list[i].userlist.length;j++)
					{
						if(userid==self.list[i].userlist[j].userid)
						{
							
							self.list[i].userlist[j].issel = self.list[i].userlist[j].issel==1?0:1;
						}
						
					}
				}	
			}

			for(let i =0;i<self.list.length;i++)
			{
				for(let j =0;j<self.list[i].userlist.length;j++)
				{
					if(self.list[i].userlist[j].issel=="1")
					self.useridlist.push(self.list[i].userlist[j].userid);
				}
				
			}
			console.log(self.useridlist);		
		}
	}
}
</script>


<style>
	.bottom_text
	{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height:100rpx;
		background-color:#ffffff;

	}
	.bottom_l
	{
		width: 50%;
		border-right: #E1E1E1 1rpx solid;
		text-align:center;

	}
	.bottom_r
	{
		width: 50%;
		text-align:center;

	}
	.issel
	{
		width: 60rpx;
		height: 60rpx;	
	}
	image, .image
	{
		width: 60rpx;
		height: 60rpx;	
		
	}
	.content 
	{
		padding: 0px;
	}
	.content_s
	{
		height: 95%;
	}
	.wfnodename
	{
		margin-left: 20rpx;
	}
	.pick_vfor
	{
		width: 100%;
		
		background-color: #FFFFFF;
	}
	.pick_vfor_title
	{
		display: flex;
		justify-content: space-between;
		height:100rpx;
		border-bottom:solid 1rpx #ECECEE;
		align-items:center;

	}
	.pick_vfor_content
	{
		display: flex;
		justify-content:flex-start;
		flex-direction:column;

	}
	.pick_vfor_title_l
	{
		display: flex;
		width: 90%;
		justify-content:flex-start;
		margin-left: 20rpx;
		align-items:center;	
	}
	.pick_vfor_title_r
	{
		margin-right: 20rpx;
	}
	.pick_vfor_vfor
	{
		width:100%;
		height:100rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		

	}
	.pick_vfor_vfor_block
	{
		margin: 20rpx;
	}
	.pick_vfor_vfor_l
	{
		display:flex;
		justify-content:center;
		flex-direction:row;
		align-items:center;
	}
	.pick_vfor_vfor_l_title
	{
		margin-left: 20rpx;
	}
	.pick_vfor_vfor_r
	{
		display:flex;
		margin: 20rpx;
	}
	.del
	{
	
	}
</style>
