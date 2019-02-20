//const serviceUrl = 'http://172.16.5.94/FSSGMIS_Mobile_alpha/';
const serviceUrl = 'http://172.16.5.169/FSSGMIS_Mobile_alpha/';
const fileHost='http://172.16.5.94/MisFileDisk';
const ReturnCode={
	success:0,
	fail:1,
	datanull:2
};

const sysname='信息管理系统';
const avatarUrl = '../../static/uni-center/logo.png';
const checkLogin = function(userInfo,forcedLogin,callback) {
	if (userInfo.username=='') {
		uni.showModal({
			title: '未登录',
			content: '您未登录，需要登录后才能继续',
			/**
			 * 如果需要强制登录，不显示取消按钮
			 */
			showCancel: !forcedLogin,
			success: (res) => {
				if (res.confirm) {
				
					/**
					 * 如果需要强制登录，使用reLaunch方式
					 */
					if (forcedLogin) {
						uni.reLaunch({
							url: '../login/login'
						});
					} else {
						uni.navigateTo({
							url: '../login/login'
						});
					}
				}
			}
		});
	}else{
		callback();
// 						uni.reLaunch({
// 							url: '../main/main'
// 						});
	}
	
}
export default {
	serviceUrl ,//服务地址
	checkLogin,
	fileHost,//文件服务器地址
	sysname,//系统名称
	avatarUrl,//默认头像
	ReturnCode
}
