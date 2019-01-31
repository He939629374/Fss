<template>
	<view class="content">
		<view class="HeadTitle">
			<view class="LogoView">
				<image class="LOGO" src="../../static/img/loginLOGO.png"></image>
				<view><text>{{systeam}}</text></view>
			</view>
			<view class="BLView"><image class="BL" src="../../static/img/loginBL.png"></image></view>
		</view>
		<view class="HeadContente">
			<view class="input-group2 input-box">
				<view class="input-row ">
					<image class="acc" src="../../static/img/acc.png"></image>
					<text class="title">账号：</text>
					<m-input
						class="m-input"
						type="text"
						clearable
						focus
						v-model="account"
						placeholder="请输入账号"
					></m-input>
				</view>
				<view class="input-row">
					<image class="psw" src="../../static/img/psw.png"></image>
					<text class="title">密码：</text>
					<m-input
						type="password"
						displayable
						v-model="password"
						placeholder="请输入密码"
					></m-input>
				</view>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">登录</button>
			</view>
			<view class="action-row">
				<navigator url="../reg/reg">注册账号</navigator>
				<text>|</text>
				<navigator url="../pwd/pwd">忘记密码</navigator>
			</view>
			<view class="oauth-row" v-if="hasProvider" v-bind:style="{ top: positionTop + 'px' }">
				<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
					<image :src="provider.image" @tap="oauth(provider.value)"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import service from '../../service.js';
import Global from '../../store/Global.js';
import { mapState, mapMutations } from 'vuex';
import mInput from '../../components/m-input.vue';

export default {
	components: {
		mInput,
		Global
	},
	data() {
		return {
			providerList: [],
			hasProvider: true,
			account: '',
			password: '',
			positionTop: 0,
			sysname: Global.sysname
		};
	},
	computed: mapState(['forcedLogin']),
	methods: {
		...mapMutations(['login']),
		bindLogin() {
			var self = this;
			// 				if (this.account.length < 5) {
			// 					uni.showToast({
			// 						icon: 'none',
			// 						title: '账号最短为 5 个字符'
			// 					});
			// 					return;
			// 				}
			// 				if (this.password.length < 6) {
			// 					uni.showToast({
			// 						icon: 'none',
			// 						title: '密码最短为 6 个字符'
			// 					});
			// 					return;
			// 				}
			uni.showLoading({
				title: '正在登录'
			});
			const result = service.loginFromNet(this.account, this.password, function() {
				uni.showToast({
					icon: 'none',
					title: '登录成功'
				});
				self.toMain(self.account);
			});
		},
		toMain(userName) {
			this.login(userName);
			/**
			 * 强制登录时使用reLaunch方式跳转过来
			 * 返回首页也使用reLaunch方式
			 */
			if (this.forcedLogin) {
				uni.reLaunch({
					url: '../main/main'
				});
			} else {
				uni.navigateBack();
			}
		}
	}
};
</script>

<style>
	.input-group2 {
		margin-top: 40upx;
		position: relative;
	}
	.input-box {
		width: 80%;
		margin-left: 10%;
	}
.input-row {
	border-bottom-style:solid;
	border-bottom-width:1rpx;
	border-color: #B3B3B3;
	align-items:center;
	margin-left:20upx;
}
.input-row .title{

	padding-left: 20upx;
}
.acc,.psw{
	width:40upx;
	height:40upx;
	justify-content: center;
	align-content: center;
}
.LogoView text{
	color: #FFFFFF;
	font-size: 40upx;
}
.LogoView {
	text-align: center;
}
.LOGO {
	width: 250upx;
	height: 220upx;
}
.BL {
	position: absolute;
	bottom: 0upx;
	width: 100%;
	height: 80upx;
}
.content {
	padding: 0px;
	background-color:#ffffff;
}
.HeadTitle {
	position: relative;
	height: 40%;
	background-color: #1A9EFF;
}
.HeadContente {
	padding: 20rpx;
}
.action-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.action-row navigator {
	color: #007aff;
	padding: 0 20upx;
}

.oauth-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}

.oauth-image {
	width: 100upx;
	height: 100upx;
	border: 1upx solid #dddddd;
	border-radius: 100upx;
	margin: 0 40upx;
	background-color: #ffffff;
}

.oauth-image image {
	width: 60upx;
	height: 60upx;
	margin: 20upx;
}

.btn-row {
	/* position: absolute; */
	bottom: 120upx;
	width: 80%;
	margin-left: 10%;
}
.input-group {
}
</style>
