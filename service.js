import Global from './store/Global.js'

// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function() {
	let ret = '';
	console.log(uni.getStorageSync(USERS_KEY))
	ret = uni.getStorageSync(USERS_KEY);
	if (!ret) {
		ret = JSON.stringify({
			username: '',
			userid: ''
		});
	}
	return JSON.parse(ret);
}

const addUser = function(userInfo) {
	uni.setStorageSync(USERS_KEY, JSON.stringify(userInfo));
}

//登陆请求
const loginFromNet = function(username, password, callback) {
	console.log(Global.serviceUrl + 'User/Login');
	uni.request({
		url: Global.serviceUrl + 'User/Login',
		method: 'POST',
		data: {
			username: username,
			password: password
		},
		success: (res) => {
			console.log(res.data.userInfo);
			if (res.data.code == 0) {
				addUser(res.data.userInfo);
				callback();
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
			}
		},
		fail: () => {
			uni.hideLoading();
		}
	});
}

const getWorkFlowList = function(userid, type, callback) {
	console.log(Global.serviceUrl + 'MobileWorkFlow/GetWorkFlowList');
	uni.request({
		url: Global.serviceUrl + 'MobileWorkFlow/GetWorkFlowList',
		method: 'POST',
		data: {
			userid: userid,
			type: type
		},
		success: (res) => {
			uni.hideLoading();
			if (res.data.code == 0) {
				callback(res.data.rs);
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
			}
		},
		fail: () => {
			uni.hideLoading();
		}
	});
}

const downLoadFileByWorkFlow = function(fileid) {
	console.log(Global.serviceUrl + 'MobileWorkFlow/DownloadFile');
	uni.request({
		url: Global.serviceUrl + 'MobileWorkFlow/DownloadFile',
		method: 'POST',
		data: {
			fileid: fileid
		},
		success: (res) => {
			uni.hideLoading();
			if (res.data.code == 0) {
				//callback(res.data.filePath);
				uni.downloadFile({
					url: Global.fileHost + res.data.filePath,
					success: (res) => {
						// 						uni.showToast({
						// 							title:'下载成功'
						// 						})
						console.log(res);
						uni.showModal({
							title:res.tempFilePath 
						})
					},
					fail: (res) => {
						uni.showToast({
							title: '下载失败'
						})
					}
				})
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
			}
		},
		fail: () => {
			uni.hideLoading();
		}
	});
}

//目录面板信息
const getContents = function(username, password, callback) {
	console.log(Global.serviceUrl + 'User/Login');
	uni.request({
		url: Global.serviceUrl + 'User/Login',
		method: 'POST',
		data: {
			username: username,
			password: password
		},
		success: (res) => {
			console.log(res.data.userInfo);
			if (res.data.code == 0) {
				uni.hideLoading();
				callback();
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
			}
		},
		fail: () => {
			uni.hideLoading();
		}
	});
}
//通讯录目录
//通讯录人员目录
const getTxlRy = function(userid, type, callback) {
	console.log(Global.serviceUrl + 'MobileWorkFlow/GetWorkFlowList');
	uni.request({
		url: Global.serviceUrl + 'MobileWorkFlow/GetWorkFlowList',
		method: 'POST',
		data: {
			userid: userid,
			type: type
		},
		success: (res) => {
			uni.hideLoading();
			if (res.data.code == 0) {
				callback(res.data.rs);
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
			}
		},
		fail: () => {
			uni.hideLoading();
		}
	});
}

export default {
	getUsers,
	addUser,
	loginFromNet,
	getWorkFlowList,
	downLoadFileByWorkFlow,
	getContents,//目录面板信息
	getTxlRy,//通讯录人员目录
}
