<template>
	<view>
		<view class="user-box">
			<view class="user-info">
				<view class="info-avatar">
					<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/avatar.jpeg"></image>
				</view>
				<view class="info-detail">
					<view class="info-name">MRC</view>
					<view class="info-version">仿石漆电子色卡体验版</view>
				</view>
			</view>
		</view>
		<view class="nav-list">
			<view class="nav-item" v-for="(item, index) in navList" :key="index" @click="toUrl(item.page)">
				<view class="nav-left">
					<image :src="item.url"></image>
					<text>{{item.name}}</text>
				</view>
				<view class="nav-right">
					<image src="http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/more.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/color.png',
					name: '发色卡',
					page: '/pages/user/invite'
				},{
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/bind.png',
					name: '绑定色卡',
					page: '/pages/user/bind'
				},{
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/test.png',
					name: '体验一下',
					page: '/pages/user/invite'
				},{
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/help.png',
					name: '帮助中心',
					page: '/pages/user/help'
				},{
					url: 'http://rf7ocvhsf.hn-bkt.clouddn.com/colorCard/user/about.png',
					name: '电子发色',
					page: '/pages/user/about'
				}]
			};
		},
		methods: {
			toUrl(url) {
				if (!url) return;
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F0F0F0;
	}

	.user-box {
		width: 100%;
		height: 300rpx;
		position: relative;
		z-index: -1;
		overflow: hidden;

		.user-info {
			position: absolute;
			bottom: 0;
			padding: 0 60rpx;
			display: flex;
			align-items: center;
			z-index: 1;

			.info-avatar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 100%;

				image {
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}

			.info-detail {
				margin-left: 40rpx;

				.info-name {
					font-size: 34rpx;
					color: #FFFFFF;
				}

				.info-version {
					margin: 10rpx 0 20rpx;
					font-size: 32rpx;
					color: #FFFFFF;
				}
			}
		}
	}

	.user-box::after {
		content: '';
		display: block;
		width: 160%;
		height: 200%;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: -100%;
		transform: translateX(-50%);
		background: #3B69DC;
	}
	
	.nav-list {
		padding: 40rpx 0 0;
		
		.nav-item {
			margin: 15rpx 0;
			padding: 0 20rpx;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			
			.nav-left {
				display: flex;
				align-items: center;
				
				image {
					width: 60rpx;
					height: 60rpx;
				}
				
				text {
					padding: 0 20rpx;
					font-size: 30rpx;
				}
			}
			
			.nav-right {
				width: 40rpx;
				height: 40rpx;
				
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
