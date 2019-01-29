<template>
	<view class="content">
		<view class="uni-form-item uni-column v_view">
				<view class="title">旧密码</view>
				<text class="">|</text>
				<view class=""><input class="uni-input" password type="text" @input="onKeyInputO" placeholder="请输入旧密码" /></view>
		</view>	
		<view class="uni-form-item uni-column v_view">
				<view class="title">新密码</view>
				<text class="">|</text>
				<view class=""><input class="uni-input" password type="text" @input="onKeyInputN" placeholder="请输入新密码" /></view>
		</view>	
		<view class="uni-form-item uni-column v_view">
				<view class="title">确认新密码</view>
				<text class="">|</text>
				<view class=""><input class="uni-input" password type="text" @input="onKeyInputNA" placeholder="请再次输入新密码" /></view>
		</view>	
			<view class="btn-row">
				<button type="primary" class="primary" @tap="submitPwd">保存</button>
			</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				opwd: '',
				npwd: '',
				napwd: ''
			}
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
				if(this.npwd.length<6)
				{
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}else if(this.napwd!=this.npwd)
				{
					uni.showToast({
						icon: 'none',
						title: '两次输入的密码不一致'
					});
				}
			},
		}
	}
</script>

<style>
	.btn-row {
		
	}
	.uni-form-item .title {
		width: 160upx;
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
		margin-top: 40upx;
	}
	.v_view view{
		
	}
	.v_view input{
		width:100%;
	}
</style>
