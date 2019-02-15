<template>
	<view class="content">
		<view class="HeadTitle">
			<view class="LogoView">
				<image class="LOGO" :src="login ? avatarUrl :avatarUrl"></image>
			</view>
		</view>
		<view class="uni-form-item uni-column v_view" v-for="item in list" :key="item.name">
				<view class="title">{{item.name}}</view>
				<text class="">|</text>
				<input class="text" v-if="read!=1"  :value="item.text"/>
				<view class="text" v-else>{{item.text}}</view>
		</view>	
		<view class="btn-row" v-if="read!=1">
			<button type="primary" class="primary" @tap="submitPwd">保存</button>
		</view>
	</view>
</template>

<script>
	import Global from '../../store/Global.js';
	import service from '../../service.js';
    export default {
		components: {Global,service},
		data() {
			return {
				read:0,
				res:'',
				list:[],
				list_by: [{'name':'姓名','text':'陈姗姗'},
				{'name':'单位','text':'佛山市测绘地理信息研究院'},
				{'name':'电话','text':'0757-66861234'},
				{'name':'手机','text':'13768971234'},
				{'name':'邮箱','text':'123456789@163.com'}
				],
				avatarUrl: Global.avatarUrl,
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			var self = this;
			console.log("打印出上个页面传递的参数"); //打印出上个页面传递的参数。
			console.log(option);
			this.read = option.read;
			//根据传过来的部门ID和用户ID查询个人信息
			var result = service.getTxlRyMessage(option.departmentid,option.userid,0, function(res) {		
				console.log(res[0]);
				if(res[0]==""||res[0]==undefined)
				{
					self.list.push({'name':'姓名','text':""});
					self.list.push({'name':'单位','text':""});
					self.list.push({'name':'电话','text':""});
					self.list.push({'name':'邮箱','text':""})
					
				}else 
				{
					var list = res[0];
					self.list.push({'name':'姓名','text':list.USERNAME});
					self.list.push({'name':'单位','text':list.DEPTUSERBH});
					self.list.push({'name':'电话','text':list.PHONE});
					self.list.push({'name':'邮箱','text':list.EMAIL})
				}
				
			});	
		},
		methods: {
			onKeyInputO: function(event) {
				this.opwd = event.target.value
			},
			onKeyInputN: function(event) {
				this.npwd = event.target.value
			},
			onKeyInputNA: function(event) {
				this.napwd = event.target.value
			},
			submitPwd: function() {
				
			},
		}
	}
</script>

<style>
	.btn-row {	
	}
	.uni-form-item .title {
		width: 100upx;
		text-align: center;
	}
	.uni-input {
		padding: 0px 40upx;
	}
	.content {
		width: 100%;
		background-color: #FFFFFF;
	}
	.v_view {
		display:flex;
		align-items:center;
		flex-direction:row;
		box-shadow:0px 5px 30rpx #EDEDED;
		border:1rpx solid #F3F3F3;
		margin-bottom: 40upx;
	}
	.text{
		margin-left: 40upx;
		width: 65%;
	}
	.LogoView {
		text-align: center;
	}
	.LOGO {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}
	.HeadTitle {
		position: relative;
		height: 200upx;
	}
</style>
