<template>
	<view class="content">
		<view class="content_s">
		<view v-for="(item,index) in list" :key="index" class="pick_vfor">
			<view>
				<view class="pick_vfor_title">
					<view class="pick_vfor_title_l" @click="item.issel==1?item.issel=0:item.issel=1"><view class="issel"><image class="issel" :src="item.issel==1 ? '../../static/img/issel.png' : '../../static/img/nosel.png'"/></view>
					<view class="wfnodename">{{item.wfnodename}}</view>
					</view>
					<view class="pick_vfor_title_r" @click="tabonclick(item.wfnodecode)"><uni-icon type="plus" size="30"></uni-icon></view>
					
				</view>
				
				<view class="pick_vfor_content">
					<view v-for="(items,indexs) in item.userlist" :key="indexs" class="pick_vfor_vfor">
						<view class="pick_vfor_vfor_block">
							<view class="pick_vfor_vfor_l">
								<view class="image"><image class="LOGO" src="../../static/img/TX1.png"/></view>
								<view>{{items.username}}</view>
							</view>
							</view>
							<view class="pick_vfor_vfor_r "><image class="del" src="../../static/img/-.png" @click="delclick(items.userid,item.wfnodecode)"/></view>
						</view>
				</view>
			</view>
		</view>
		</view>

		<view class="bottom_text">
			<view class="bottom_l" @click="BaorCo('back')">返回</view>
			<view class="bottom_r" @click="BaorCo('confirm')">提交</view>
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
			Backwfnodecode:"",
			BackUserid: [], 
			list:[
				{
					wfnodecode:123,
					wfnodename:"科长审核",
					userlist:[
						{userid:1,username:"A科长"},
						{userid:2,username:"B科长"}
					],
					issel:0,
				},
				{
					wfnodecode:1232,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				},
				{
					wfnodecode:1234,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				},
				{
					wfnodecode:1232,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				},
				{
					wfnodecode:1232,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				},
				{
					wfnodecode:1232,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				},
				{
					wfnodecode:1232,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				},
				{
					wfnodecode:1232,
					wfnodename:"科长审核2",
					userlist:[
						{userid:3,username:"A科长2"},
						{userid:4,username:"B科长2"}
					],
					issel:1,
				}
				]
		}
	},
	onLoad() {
	},
	onShow(e) {//页面显示前的操作
		var self =this;
		let pages = getCurrentPages();
		let currPage = pages[pages.length-1];
		if (currPage.data.BackUserid==""||currPage.data.BackUserid==undefined){
		}else{
			self.BackUserid = currPage.data.BackUserid;//回传的已选人员列表
			self.Backwfnodecode = currPage.data.Backwfnodecode;//回传的节点编号
			console.log(this.BackUserid);
			for(let i =0;i<self.list.length;i++)
			{
				if(self.Backwfnodecode==self.list[i].wfnodecode)//替换已选人员列表
				{
					self.list[i].userlist = self.BackUserid;
				}
			}
		}
	 },
	methods: {
		tabonclick(wfnodecode) {//点击跳转
			var self = this;
			var userid = [];
			for(let i =0;i<self.list.length;i++)
			{
				if(wfnodecode==self.list[i].wfnodecode)
				{
					for(let j =0;j<self.list[i].userlist.length;j++)
					{
						userid.push(self.list[i].userlist[j].userid);
					}
				}
			}
			uni.navigateTo({
				url: '../pick/pickRY?wfnodecode=' + wfnodecode+'&userid=' + ","+userid+","
			});
		},
		delclick(userid,wfnodecode) {//删除已选人员
			var self = this;
			for(let i =0;i<self.list.length;i++)
			{
				if(wfnodecode==self.list[i].wfnodecode)
				{
					for(let j =0;j<self.list[i].userlist.length;j++)
					{
						if(userid==self.list[i].userlist[j].userid)
						{
							self.list[i].userlist.splice(j,1);
							console.log(self.list);
						}
						
					}
				}
			}
			
		}
	}
}
</script>


<style>
	.bottom_text
	{
		bottom: 0%;
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
		width: 50rpx;
		height: 50rpx;	
	}
	image, .image
	{
		width: 70rpx;
		height: 70rpx;
		
	}
	.content 
	{
		display:flex;
		background-color: #EEEEF0;
		height: 100vh;
		padding: 0px;
	}
	.content_s
	{
		height: 100%;
		overflow-y: scroll;
		position: relative;
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
		flex-flow:row wrap;
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
		width:150rpx;
		height:150rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		

	}
	.pick_vfor_vfor_block
	{
	}
	.pick_vfor_vfor_l
	{
		display:flex;
		justify-content:center;
		flex-direction:column;
		align-items:center;
	}
	.pick_vfor_vfor_r
	{
		position: absolute;
		width: 35rpx;
		height: 35rpx;
	}
	.del
	{
		width: 35rpx;
		height: 35rpx;
		top:-175%;
		position:relative;
		left:100%;
	}
</style>
