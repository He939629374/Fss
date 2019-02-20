<template>
	<view class="content">
		<view class="HeadTitle">
			<view class="LogoView">
				<image class="LOGO" src="../../static/img/loginLOGO.png"></image>
				<view><text>{{systeam}}</text></view>
			</view>
		</view>
		<scroll-view class="HeadContente" scroll-y="true" @scrolltoupper="upper">
			<view v-for="(row,i) in listTemp" :key="row.id" class="v_row">
				<view :id="j" v-for="(cell,key,j) in row" :key="cell.id" class="v_row_block" :class="{v_display:cell.display}">
					<view class="v_col" @click="tabonclick(cell.menuname,cell.pageurl)">
						<view class="v_row_v_img">
						<img :src="cell.imageurl"></img>
						</view>
						<view >{{cell.menuname}}</view>
					</view>
				</view>
			</view>  
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import Global from '../../store/Global.js';
	import service from "../../service.js";
	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		components: {
			Global,service
		},
		data() {
			return {
				systeam: Global.sysname,
				list:[
// 					{"imageurl":'../../static/img/conZL.png',"menuname":'我的资料',pageurl:"../user/user"},
// 					{"imageurl":'../../static/img/conRC.png',"menuname":'日程',pageurl:"../scheduling/scheduling"},
// 					{"imageurl":'../../static/img/conZX.png',"menuname":'信息中心',pageurl:"../msgcenter/msgcenter?BarTitle=待办箱"},
// 					{"imageurl":'../../static/img/conSP.png',"menuname":'审批',pageurl:"../record/record"},
// 					{"imageurl":'../../static/img/conTX.png',"menuname":'提醒',pageurl:"../tips/tips"},
// 					{"imageurl":'../../static/img/conGZ.png',"menuname":'工作',pageurl:"../pick/pick"},
// 					{"imageurl":'../../static/img/conYJ.png',"menuname":'邮件',pageurl:"../email/email"},
// 					{"imageurl":'../../static/img/conFJ.png',"menuname":'附件',pageurl:"../file/file"},
// 					{"imageurl":'../../static/img/conQT.png',"menuname":'其他',pageurl:"../other/other"},
				]
			};
		},
		created:function () {
			var self = this;
			this.userInfo = service.getUsers(function() {
			});
			Global.checkLogin(self.userInfo, self.forcedLogin, function() {
			});
			var result = service.getContents(function(res) {				
					self.list = res;
					for(let i=0;i<res.length;i++)
					{
						self.list[i].imageurl = Global.serviceUrl+self.list[i].imageurl;
					}
					if((res.length%3)==2)
					{
						self.list.push({"imageurl":'../../static/img/conQT.png',"menuname":'其他',pageurl:"../other/other",display:true})
					}
					uni.stopPullDownRefresh();
					console.log(self.list);
					
				});	
		},
		computed: {
			//计算函数
			listTemp: function () { //数据分组
				var list = this.list;
				var arrTemp = [];
				var index = 0;
				var sectionCount = 3; //一行显示多少个
				for (var i = 0; i < list.length; i++) {
					index = parseInt(i / sectionCount); //取余数
					if (arrTemp.length <= index) { //每隔 sectionCount 个数据添加一行
						arrTemp.push([]);
					}
					arrTemp[index].push(list[i]); //每行添加 sectionCount 个数据
				}
				return arrTemp;
			}
		},
		methods: {
			upper() {
				console.log('refresh');
				var self = this;
				var result = service.getContents(function(res) {				
						self.list = res;
						for(let i=0;i<res.length;i++)
						{
							self.list[i].imageurl = Global.serviceUrl+self.list[i].imageurl;
						}
						if((res.length%3)==2)
						{
							self.list.push({"imageurl":'../../static/img/conQT.png',"menuname":'其他',pageurl:"../other/other",display:true})
						}
						uni.stopPullDownRefresh();				
					});	
			},
			tabonclick(_name,_path) {//点击跳转
			console.log(_path);
				var self = this;
				if(_name=="我的资料")
				{
					uni.reLaunch({
						url: '../user/user'
					});
				}else{
					if(_path.indexOf('http')>=0)
					{
						uni.navigateTo({
							url: '../webview/webview?url=' + _path
						});	
					}else
					{
						uni.navigateTo({
							url: _path
						});	
					}
				}


			},
		}
	};
</script>

<style>
	.v_margin
	{
		margin-right: 25rpx;
	}
	.v_row_v_img {
		width: 100%;
		height: 80upx;
		margin-top: 10upx;
		justify-content: center;
		align-items: centerc;
	}
	.v_col img {
		width: 80upx;
		height: 80upx;
	}
	.v_row_block {
		background-color:#FFFFFF;
		width:160upx;
		height:160upx;
		display:flex;
		justify-content: center;
		align-items: center;
		border-radius:8%;
		box-shadow:0px 5px 30rpx #2D97F1;
		border:1rpx solid #FFFFFF;
	}
	.v_row {
		color:black;
		display: flex;
		/* flex-flow:row wrap; */
		justify-content: space-between;
		padding: 20upx;
	}
	.v_col {
		width: 120upx;
		text-align:center;
	}
	.t_view {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		align-items: ;
	}
	.content {
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(#1A9EFF, #80C9FC); /* 标准的语法 */
		padding: 0px;
	}
	.LogoView text{
		color: #FFFFFF;
		font-size: 40upx;
		letter-spacing:5px;
	}
	.LogoView {
		text-align: center;
	}
	.LOGO {
		width: 250upx;
		height: 220upx;
	}
	.HeadTitle {
		position: relative;
	}
	.HeadContente {
		margin-top: 20upx;
		padding: 65rpx;
		/* overflow-y: scroll; */
		height:65vh;
		width:625rpx;
	}
	::-webkit-scrollbar {
		width: 0px;
		height: 1px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: rgba(0, 0, 0, 0.2);
	}
	.v_display
	{
		opacity: 0;
	}
</style>
