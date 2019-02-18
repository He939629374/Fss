<template>
	<view class="content">
		<view  class="content_s">
			<view v-for="(item,index) in list" :key="index" class="pick_vfor">
						<view class="pick_vfor_title" @click="item.issel==1?item.issel=0:item.issel=1">
							<view class="rolename">{{item.rolename}}</view>
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
									<view class="pick_vfor_vfor_r " @click="gclick(items.userid,item.rolename)"><image class="del" :src="items.issel==1 ? '../../static/img/issel.png' : '../../static/img/nosel.png'" /></view>
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
			scrollTop: 0,
			Backwfnodecode:"",
			useridlist: [], 
			issingel:0,
			list:[
				{
					rolename:"(南海)科长1",
					userlist:[
						{userid:1,username:"A科长",issel:0},
						{userid:2,username:"B科长",issel:0}
					],
					issel:0,
				},
				{
					rolename:"(南海)科长2",
					userlist:[
						{userid:3,username:"A科长2",issel:0},
						{userid:4,username:"B科长2",issel:0}
					],
					issel:1,
				},
				{
					rolename:"(南海)科长2",
					userlist:[
						{userid:3,username:"A科长2",issel:0},
						{userid:4,username:"B科长2",issel:0}
					],
					issel:1,
				}
				],
			list2:[{rolename:'角色1',userlist:[{userid:1,username:"人员1"},{userid:2,username:"人员2"}]},
			{rolename:'角色2',userlist:[{userid:3,username:"人员3"},{userid:4,username:"人员4"}]}]
		}
	},
	onLoad(option) {
		uni.hideLoading();
		var self = this;
		console.log("打印出上个页面传递的参数"); //打印出上个页面传递的参数。
		console.log(option);
		this.Backwfnodecode = option.wfnodecode;
		this.issingel = option.issingel;
		for(let i =0;i<self.list.length;i++)
		{
			for(let j =0;j<self.list[i].userlist.length;j++)
			{
				
				if(option.userid.indexOf(","+self.list[i].userlist[j].userid+",")!=-1 || option.userid.indexOf(","+self.list[i].userlist[j].userid+",")!=-1)
				{
					self.list[i].userlist[j].issel = 1;
				}
				
			}
		}
	},
	methods: {
		IsInArray (arr,val){
		　　
		　　return ;
		},
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
				        BackUserid:self.useridlist,
						Backwfnodecode:self.Backwfnodecode
				})
				uni.navigateBack();
			}
		},
		gclick(userid,rolename) {//选人员
			var self = this;
			self.useridlist = [];
			console.log(userid)	;	
			//选择人员后处理图标显示
			for(let i =0;i<self.list.length;i++)
			{
				if(self.issingel ==1)//单选时处理
				{
					for(let j =0;j<self.list[i].userlist.length;j++)
					{
						if(userid!=self.list[i].userlist[j].userid)//其他选项置0
						{
							self.list[i].userlist[j].issel = 0;
						}else
						{
							self.list[i].userlist[j].issel = self.list[i].userlist[j].issel==1?0:1;
						}
					}	
				}
				else//多选时处理
				{
					if(rolename==self.list[i].rolename)
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
			}

			//保存选择的人员
			for(let i =0;i<self.list.length;i++)
			{
				for(let j =0;j<self.list[i].userlist.length;j++)
				{
					if(self.list[i].userlist[j].issel=="1")
					self.useridlist.push(self.list[i].userlist[j]);
					
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
		
		height: 100vh;
		padding: 0px;
	}
	.content_s
	{
		height: 100%;
		overflow-y: scroll;
		position: relative;
	}
	.rolename
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
