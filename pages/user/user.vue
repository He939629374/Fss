<template>
	<view class="content">
		<view class="HeadTitle">
			<view class="LogoView" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
				<image class="LOGO" :src="login ? avatarUrl :avatarUrl"></image>
				<view>
					<text class="uer-name">Hi，{{login ? userInfo.username : '您未登录'}}</text>
					<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
				</view>
			</view>
			<view class="BLView"><image class="BL" src="../../static/img/loginBL.png"></image></view>
		</view>
		<view class="HeadContente">
			<uni-list>
				<uni-list-item title="个人资料"  @click="tabonclick('../user/remsg?read=1&userid=')"></uni-list-item>
				<uni-list-item title="绑定手机"  @click="tabonclick('../user/user?read=0&userid=')"></uni-list-item>
				<uni-list-item title="修改密码"  @click="tabonclick('../user/repwd?read=0&userid=')"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import service from "../../service.js";
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	import Global from '../../store/Global.js';
	export default {
		components: {uniList,uniListItem,service,Global},
		data() {
			return {
				login: true,
				avatarUrl: Global.avatarUrl,
				userInfo: {}
			}
		},
		onLoad() {
			this.userInfo = service.getUsers();
			console.log(this.userInfo );
		},
		methods: {
			tabonclick(_path) {//点击跳转
			console.log(_path);
				var self = this;
				uni.navigateTo({
					url: _path+this.userInfo.userid
				});
			},
			logout() {
				uni.removeStorageSync('USERS_KEY');
				uni.reLaunch({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>
	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}
	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}
	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
	.logo-hover {
		opacity: 0.8;
	}
.LogoView text{
	color: #FFFFFF;
	font-size: 40upx;
}
.LogoView {
	text-align: center;
}
.LOGO {
	width: 150upx;
	height: 150upx;
	border-radius: 150upx;
}
.BL {
	position: absolute;
	bottom: 0upx;
	width: 101%;
	height: 80upx;
}
.content {
	padding: 0px;
	background-color:#ffffff;
}
.HeadTitle {
	position: relative;
	height: 30%;
	background-color: #1A9EFF;
}
.HeadContente {
	margin-top: 20rpx;
}
</style>
